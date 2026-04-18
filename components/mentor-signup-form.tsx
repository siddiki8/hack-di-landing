"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronUp, ChevronDown, Loader2, CheckCircle2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  ensureFirebaseAnonymousSession,
  getFirebaseAuth,
  getFirebaseDb,
  isFirebaseConfigured,
  missingFirebaseEnvVars,
} from "@/lib/firebase-client"

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type MentorSignupValues = {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  company: string
  gender: "male" | "female" | ""
  role: string
  expertise: string
  contributions: string[]
  whatsappConsent: "yes" | "no" | ""
  shirtSize: "S" | "M" | "L" | "XL" | ""
  questions: string
}

const initialValues: MentorSignupValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  company: "",
  gender: "",
  role: "",
  expertise: "",
  contributions: [],
  whatsappConsent: "",
  shirtSize: "",
  questions: "",
}

/* ------------------------------------------------------------------ */
/*  Option data                                                        */
/* ------------------------------------------------------------------ */

const contributionOptions = [
  { key: "A", id: "project-guidance", label: "Project Guidance & Mentoring" },
  { key: "B", id: "technical-workshop", label: "Leading a Technical Workshop" },
  { key: "C", id: "career-mentoring", label: "Non-technical Mentoring / Career Advice" },
  { key: "D", id: "recruiting", label: "Recruiting for My Company" },
  { key: "E", id: "mentor-network", label: "Connect with other mentors" },
  { key: "F", id: "financial-support", label: "Financial support" },
  { key: "G", id: "other", label: "Other" },
]

const shirtSizeOptions = [
  { key: "A", value: "S" as const, label: "Small" },
  { key: "B", value: "M" as const, label: "Medium" },
  { key: "C", value: "L" as const, label: "Large" },
  { key: "D", value: "XL" as const, label: "Extra Large" },
]

/* ------------------------------------------------------------------ */
/*  Steps                                                              */
/* ------------------------------------------------------------------ */

const steps = [
  { id: "name", num: 1, title: "Let\u2019s start with your name", desc: "We\u2019ll use this on your mentor badge." },
  { id: "email", num: 2, title: "What\u2019s your email address?", desc: "We\u2019ll send event details and updates here." },
  { id: "phone", num: 3, title: "What\u2019s your phone number?", desc: "For event-day coordination only." },
  { id: "company", num: 4, title: "Where do you work?", desc: "Company or organization name." },
  { id: "gender", num: 5, title: "Are you male or female?", desc: "Helps us plan mentor coverage for brother and sister spaces." },
  { id: "role", num: 6, title: "What\u2019s your role?", desc: "Your title or position at your company." },
  { id: "expertise", num: 7, title: "Tell us about your expertise", desc: "What areas can you help hackathon teams with?" },
  { id: "contributions", num: 8, title: "How would you like to contribute?", desc: "Select all that apply." },
  { id: "whatsapp", num: 9, title: "Can we add you to our WhatsApp group?", desc: "We use it for event-day updates and mentor coordination." },
  { id: "shirt", num: 10, title: "What\u2019s your t-shirt size?", desc: "For your mentor tee." },
  { id: "notes", num: 11, title: "Anything else?", desc: "Questions, suggestions, or notes \u2014 totally optional." },
] as const

const TOTAL = steps.length

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function normalizePhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "")
  if (!digits) return ""
  return value.trim().startsWith("+") ? `+${digits}` : digits
}

function isValidPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "")
  return digits.length >= 10 && digits.length <= 15
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function getSubmissionErrorMessage(error: unknown) {
  if (typeof error === "object" && error !== null && "code" in error && typeof (error as { code: unknown }).code === "string") {
    const code = (error as { code: string }).code
    if (code === "permission-denied") return "Firebase rejected the write. Check Firestore rules or enable anonymous auth."
    if (code === "unavailable") return "Firebase is temporarily unavailable. Please try again."
  }
  return "Something went wrong. Please try again."
}

/* ------------------------------------------------------------------ */
/*  Animation                                                          */
/* ------------------------------------------------------------------ */

const slideVariants = {
  enter: (dir: number) => ({ y: dir > 0 ? 50 : -50, opacity: 0 }),
  center: { y: 0, opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir: number) => ({ y: dir > 0 ? -50 : 50, opacity: 0, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }),
}

/* ================================================================== */
/*  MentorSignupForm                                                   */
/* ================================================================== */

export function MentorSignupForm() {
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [values, setValues] = useState<MentorSignupValues>(initialValues)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasInteractedRef = useRef(false)

  const current = steps[step]
  const progress = ((step + 1) / TOTAL) * 100
  const isLast = step === TOTAL - 1

  /* ---- focus ---- */
  useEffect(() => {
    if (!hasInteractedRef.current) {
      return
    }

    const timer = setTimeout(() => {
      const el = containerRef.current?.querySelector<HTMLInputElement | HTMLTextAreaElement>(
        "input:not([type=hidden]), textarea",
      )
      el?.focus()
    }, 400)
    return () => clearTimeout(timer)
  }, [step])

  /* ---- validation ---- */
  const validate = useCallback((): string | null => {
    switch (current.id) {
      case "name":
        if (!values.firstName.trim()) return "First name is required."
        if (!values.lastName.trim()) return "Last name is required."
        return null
      case "email":
        if (!values.email.trim()) return "Email is required."
        if (!isValidEmail(values.email)) return "Please enter a valid email."
        return null
      case "phone":
        if (!values.phoneNumber.trim()) return "Phone number is required."
        if (!isValidPhoneNumber(values.phoneNumber)) return "Please enter a valid phone number."
        return null
      case "company":
        if (!values.company.trim()) return "Company is required."
        return null
      case "gender":
        if (!values.gender) return "Please choose one."
        return null
      case "role":
        if (!values.role.trim()) return "Your role is required."
        return null
      case "expertise":
        if (!values.expertise.trim()) return "Tell us about your expertise."
        return null
      case "contributions":
        if (values.contributions.length === 0) return "Choose at least one."
        return null
      case "whatsapp":
        if (!values.whatsappConsent) return "Please choose yes or no."
        return null
      case "shirt":
        if (!values.shirtSize) return "Please select a size."
        return null
      default:
        return null
    }
  }, [current.id, values])

  /* ---- navigation ---- */
  const goNext = useCallback(() => {
    const err = validate()
    if (err) {
      setError(err)
      return
    }

    hasInteractedRef.current = true
    setError(null)
    if (step < TOTAL - 1) {
      setDir(1)
      setStep((s) => s + 1)
    }
  }, [step, validate])

  const goBack = useCallback(() => {
    if (step > 0) {
      hasInteractedRef.current = true
      setError(null)
      setDir(-1)
      setStep((s) => s - 1)
    }
  }, [step])

  /* ---- submit ---- */
  const doSubmit = useCallback(async () => {
    const err = validate()
    if (err) {
      setError(err)
      return
    }

    if (!isFirebaseConfigured) {
      setSubmitError(`Firebase not configured. Missing: ${missingFirebaseEnvVars.join(", ")}`)
      return
    }

    setSubmitting(true)
    setSubmitError(null)

    try {
      const authUser = await ensureFirebaseAnonymousSession()
      await addDoc(collection(getFirebaseDb(), "mentorSignups"), {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        phoneNumber: normalizePhoneNumber(values.phoneNumber),
        email: values.email.trim().toLowerCase(),
        company: values.company.trim(),
        gender: values.gender,
        role: values.role.trim(),
        expertise: values.expertise.trim(),
        contributions: values.contributions,
        whatsappConsent: values.whatsappConsent,
        shirtSize: values.shirtSize,
        questions: values.questions.trim(),
        submittedAt: serverTimestamp(),
        source: "mentor-signup-page",
        authUid: authUser?.uid ?? getFirebaseAuth().currentUser?.uid ?? null,
      })
      setSubmitted(true)
    } catch (e) {
      setSubmitError(getSubmissionErrorMessage(e))
    } finally {
      setSubmitting(false)
    }
  }, [validate, values])

  /* ---- keyboard ---- */
  const advanceRef = useRef<() => void>(() => {})
  useEffect(() => {
    advanceRef.current = () => {
      if (isLast) doSubmit()
      else goNext()
    }
  })

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault()
        advanceRef.current()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  /* ---- value helpers ---- */
  const update = <K extends keyof MentorSignupValues>(key: K, val: MentorSignupValues[K]) => {
    setValues((v) => ({ ...v, [key]: val }))
    setError(null)
    setSubmitError(null)
  }

  const toggleContribution = (id: string) => {
    const has = values.contributions.includes(id)
    update("contributions", has ? values.contributions.filter((c) => c !== id) : [...values.contributions, id])
  }

  const selectAndAdvance = <K extends keyof MentorSignupValues>(key: K, val: MentorSignupValues[K]) => {
    hasInteractedRef.current = true
    update(key, val)
    setTimeout(() => {
      setError(null)
      setDir(1)
      setStep((s) => Math.min(s + 1, TOTAL - 1))
    }, 320)
  }

  const resetForm = () => {
    hasInteractedRef.current = false
    setValues(initialValues)
    setError(null)
    setSubmitted(false)
    setSubmitError(null)
    setStep(0)
    setDir(1)
  }

  /* ================================================================ */
  /*  Submitted                                                        */
  /* ================================================================ */

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="border border-forest/15 bg-cream px-8 py-14 text-center shadow-[14px_14px_0_0_rgba(4,13,14,0.08)] flex min-h-[420px] flex-col items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        >
          <CheckCircle2 className="h-16 w-16 text-emerald-400" />
        </motion.div>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-forest md:text-4xl">
          You&rsquo;re in.
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-forest/65">
          Your mentor application has been submitted. We&rsquo;ll reach out at{" "}
          <span className="text-coral">{values.email}</span> with next steps.
        </p>
        <button
          onClick={resetForm}
          className="mt-8 border border-forest/15 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-forest/55 transition-colors hover:border-coral hover:text-coral"
        >
          Submit another
        </button>
      </motion.div>
    )
  }

  /* ================================================================ */
  /*  Step content renderer                                            */
  /* ================================================================ */

  function renderStepContent() {
    switch (current.id) {
      case "name":
        return (
          <div className="grid gap-5 sm:grid-cols-2">
            <TypeformInput placeholder="First name" value={values.firstName} onChange={(v) => update("firstName", v)} autoComplete="given-name" />
            <TypeformInput placeholder="Last name" value={values.lastName} onChange={(v) => update("lastName", v)} autoComplete="family-name" />
          </div>
        )
      case "email":
        return <TypeformInput placeholder="name@example.com" value={values.email} onChange={(v) => update("email", v)} type="email" autoComplete="email" inputMode="email" />
      case "phone":
        return <TypeformInput placeholder="(201) 555-0123" value={values.phoneNumber} onChange={(v) => update("phoneNumber", v)} type="tel" autoComplete="tel" inputMode="tel" />
      case "company":
        return <TypeformInput placeholder="Company or organization" value={values.company} onChange={(v) => update("company", v)} autoComplete="organization" />
      case "gender":
        return (
          <div className="grid gap-3 sm:grid-cols-2">
            {([{ key: "A", value: "male" as const, label: "Male" }, { key: "B", value: "female" as const, label: "Female" }]).map((opt) => (
              <ChoiceButton key={opt.value} letter={opt.key} label={opt.label} selected={values.gender === opt.value} onClick={() => selectAndAdvance("gender", opt.value)} />
            ))}
          </div>
        )
      case "role":
        return <TypeformInput placeholder="Senior Engineer, Product Designer, Engineering Manager..." value={values.role} onChange={(v) => update("role", v)} />
      case "expertise":
        return <TypeformTextarea placeholder="Frontend architecture, data pipelines, product strategy, mobile UX..." value={values.expertise} onChange={(v) => update("expertise", v)} />
      case "contributions":
        return (
          <div className="grid gap-2.5">
            {contributionOptions.map((opt) => (
              <ChoiceButton key={opt.id} letter={opt.key} label={opt.label} selected={values.contributions.includes(opt.id)} onClick={() => toggleContribution(opt.id)} />
            ))}
          </div>
        )
      case "whatsapp":
        return (
          <div className="grid gap-3 sm:grid-cols-2">
            {([{ key: "A", value: "yes" as const, label: "Yes, add me" }, { key: "B", value: "no" as const, label: "No thanks" }]).map((opt) => (
              <ChoiceButton key={opt.value} letter={opt.key} label={opt.label} selected={values.whatsappConsent === opt.value} onClick={() => selectAndAdvance("whatsappConsent", opt.value)} />
            ))}
          </div>
        )
      case "shirt":
        return (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {shirtSizeOptions.map((opt) => (
              <ChoiceButton key={opt.value} letter={opt.key} label={opt.label} sublabel={opt.value} selected={values.shirtSize === opt.value} onClick={() => selectAndAdvance("shirtSize", opt.value)} />
            ))}
          </div>
        )
      case "notes":
        return <TypeformTextarea placeholder="Anything we should know?" value={values.questions} onChange={(v) => update("questions", v)} />
      default:
        return null
    }
  }

  /* ================================================================ */
  /*  Render                                                           */
  /* ================================================================ */

  const showOkButton = current.id !== "gender" && current.id !== "whatsapp" && current.id !== "shirt"

  return (
    <div className="border border-forest/15 bg-cream p-6 shadow-[14px_14px_0_0_rgba(4,13,14,0.08)] md:p-10" ref={containerRef}>
      <div className="mb-10 flex flex-col gap-3 border-b border-forest/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-coral/80">// mentor.form</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-forest md:text-3xl">Application Intake</h2>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-forest/45">About 2 minutes</p>
      </div>

      {/* Progress */}
      <div className="mb-12 h-[3px] overflow-hidden bg-forest/10">
        <motion.div className="h-full bg-coral" initial={false} animate={{ width: `${progress}%` }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} />
      </div>

      {/* Step content */}
      <div className="relative min-h-[380px] md:min-h-[440px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div key={step} custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" className="w-full">
            {/* Step number */}
            <div className="mb-4 flex items-center gap-2">
              <span className="font-mono text-sm font-medium text-coral">{current.num}</span>
              <ArrowRight className="h-3.5 w-3.5 text-coral/70" />
            </div>

            {/* Question */}
            <h2 className="text-2xl font-semibold tracking-tight text-forest md:text-[2rem] lg:text-4xl">{current.title}</h2>
            <p className="mt-3 text-sm text-forest/55 md:text-base">{current.desc}</p>

            {/* Input area */}
            <div className="mt-8">{renderStepContent()}</div>

            {/* Error */}
            {error && (
              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-sm text-red-400">
                {error}
              </motion.p>
            )}
            {submitError && (
              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-sm text-red-400">
                {submitError}
              </motion.p>
            )}

            {/* OK / Submit + Enter hint */}
            {showOkButton && (
              <div className="mt-8 flex items-center gap-4">
                {isLast ? (
                  <button
                    onClick={doSubmit}
                    disabled={submitting}
                    className="inline-flex items-center gap-2 bg-forest px-6 py-3 font-mono text-sm font-semibold text-cream transition-colors hover:bg-coral disabled:opacity-50"
                  >
                    {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                    {submitting ? "Submitting\u2026" : "Submit"}
                  </button>
                ) : (
                  <button onClick={goNext} className="inline-flex items-center gap-2 bg-forest px-5 py-2.5 font-mono text-sm font-semibold text-cream transition-colors hover:bg-coral">
                    OK <Check className="h-4 w-4" />
                  </button>
                )}
                <span className="hidden items-center gap-1.5 text-xs text-forest/35 sm:inline-flex">
                  press{" "}
                  <kbd className="border border-forest/15 bg-white/45 px-1.5 py-0.5 font-mono text-[10px] text-forest/70">Enter &crarr;</kbd>
                </span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      <div className="mt-8 flex items-center justify-between border-t border-forest/10 pt-5">
        <span className="font-mono text-xs text-forest/35">{step + 1} of {TOTAL}</span>
        <div className="flex items-center gap-1">
          <button
            onClick={goBack}
            disabled={step === 0}
            className="border border-forest/15 p-2 text-forest/45 transition-colors hover:border-coral hover:text-coral disabled:cursor-not-allowed disabled:opacity-25"
            aria-label="Previous question"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            onClick={() => (isLast ? doSubmit() : goNext())}
            disabled={submitting}
            className="border border-forest/15 p-2 text-forest/45 transition-colors hover:border-coral hover:text-coral disabled:opacity-25"
            aria-label="Next question"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

function TypeformInput({
  placeholder,
  value,
  onChange,
  type = "text",
  autoComplete,
  inputMode,
}: {
  placeholder: string
  value: string
  onChange: (v: string) => void
  type?: string
  autoComplete?: string
  inputMode?: "email" | "tel" | "text"
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      inputMode={inputMode}
      className={cn(
        "w-full border-0 border-b-2 border-forest/20 bg-transparent px-0 py-3 text-xl font-light text-forest placeholder:text-forest/25",
        "outline-none transition-colors duration-200",
        "focus:border-coral",
        "md:text-2xl",
      )}
    />
  )
}

function TypeformTextarea({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={4}
      className={cn(
        "w-full resize-none border-0 border-b-2 border-forest/20 bg-transparent px-0 py-3 text-lg font-light text-forest placeholder:text-forest/25",
        "outline-none transition-colors duration-200",
        "focus:border-coral",
        "md:text-xl",
      )}
    />
  )
}

function ChoiceButton({
  letter,
  label,
  sublabel,
  selected,
  onClick,
}: {
  letter: string
  label: string
  sublabel?: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group flex items-center gap-3.5 border px-4 py-3.5 text-left transition-all duration-200",
        selected
          ? "border-coral bg-coral/10 text-forest shadow-[0_0_0_1px_rgba(255,122,69,0.18)]"
          : "border-forest/12 bg-white/45 text-forest/75 hover:border-coral/50 hover:bg-white/65",
      )}
    >
      <span
        className={cn(
          "inline-flex h-6 w-6 shrink-0 items-center justify-center border font-mono text-[11px] font-medium transition-all duration-200",
          selected ? "border-coral bg-coral text-cream" : "border-forest/15 text-forest/55 group-hover:border-coral/50",
        )}
      >
        {letter}
      </span>
      <div className="min-w-0 flex-1">
        <span className="text-sm font-medium md:text-base">{label}</span>
        {sublabel && <span className="ml-2 text-xs text-forest/45">{sublabel}</span>}
      </div>
      {selected && <Check className="ml-auto h-4 w-4 shrink-0 text-coral" />}
    </button>
  )
}

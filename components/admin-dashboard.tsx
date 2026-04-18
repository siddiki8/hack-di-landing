"use client"

import { useState, useEffect, useMemo } from "react"
import { onAuthStateChanged, type User } from "firebase/auth"
import { collection, getDocs, query, orderBy, type Timestamp } from "firebase/firestore"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  ChevronUp,
  FileDown,
  LogOut,
  RefreshCw,
  Search,
  Shield,
  ShieldAlert,
  Users,
  Calendar,
  Building2,
  Loader2,
  Mail,
  Phone,
  Shirt,
  MessageSquare,
  ArrowUpDown,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  getFirebaseAuth,
  getFirebaseDb,
  signInWithGoogle,
  signOutFromFirebase,
  isAdminEmail,
  isFirebaseConfigured,
} from "@/lib/firebase-client"

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type MentorSubmission = {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  company: string
  gender: string
  role: string
  expertise: string
  contributions: string[]
  whatsappConsent: string
  shirtSize: string
  questions: string
  submittedAt: Timestamp | null
  source: string
  authUid: string | null
}

type SortField = "date" | "name" | "company"
type SortDir = "asc" | "desc"

type AuthState = "loading" | "unauthenticated" | "unauthorized" | "ready"

/* ------------------------------------------------------------------ */
/*  Contribution label map                                             */
/* ------------------------------------------------------------------ */

const contributionLabels: Record<string, string> = {
  "project-guidance": "Project Guidance & Mentoring",
  "technical-workshop": "Technical Workshop",
  "career-mentoring": "Career Mentoring",
  recruiting: "Recruiting",
  "mentor-network": "Mentor Networking",
  "financial-support": "Financial Support",
  other: "Other",
}

/* ------------------------------------------------------------------ */
/*  Date helpers                                                       */
/* ------------------------------------------------------------------ */

function formatDate(ts: Timestamp | null): string {
  if (!ts) return "—"
  const d = ts.toDate()
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

function formatTime(ts: Timestamp | null): string {
  if (!ts) return ""
  return ts.toDate().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
}

function isThisWeek(ts: Timestamp | null): boolean {
  if (!ts) return false
  const now = new Date()
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  return ts.toDate() >= weekAgo
}

function downloadCSV(rows: MentorSubmission[]) {
  const headers = [
    "First Name", "Last Name", "Email", "Phone", "Company", "Gender",
    "Role", "Expertise", "Contributions", "WhatsApp", "Shirt Size", "Notes", "Submitted At",
  ]
  const esc = (v: string) => `"${(v ?? "").replace(/"/g, '""')}"`
  const csv = [
    headers.map(esc).join(","),
    ...rows.map((s) =>
      [
        s.firstName, s.lastName, s.email, s.phoneNumber, s.company, s.gender,
        s.role, s.expertise, (s.contributions ?? []).join("; "), s.whatsappConsent,
        s.shirtSize, s.questions,
        s.submittedAt ? s.submittedAt.toDate().toISOString() : "",
      ].map((v) => esc(String(v ?? ""))).join(","),
    ),
  ].join("\n")
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `mentor-signups-${new Date().toISOString().slice(0, 10)}.csv`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

/* ================================================================== */
/*  AdminDashboard                                                     */
/* ================================================================== */

export function AdminDashboard() {
  const [authState, setAuthState] = useState<AuthState>("loading")
  const [user, setUser] = useState<User | null>(null)
  const [submissions, setSubmissions] = useState<MentorSubmission[]>([])
  const [loading, setLoading] = useState(false)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortField, setSortField] = useState<SortField>("date")
  const [sortDir, setSortDir] = useState<SortDir>("desc")
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [signingIn, setSigningIn] = useState(false)

  /* ---- Auth listener ---- */
  useEffect(() => {
    if (!isFirebaseConfigured) {
      setAuthState("unauthenticated")
      return
    }
    const auth = getFirebaseAuth()
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser || firebaseUser.isAnonymous) {
        setUser(null)
        setAuthState("unauthenticated")
      } else if (!isAdminEmail(firebaseUser.email)) {
        setUser(firebaseUser)
        setAuthState("unauthorized")
      } else {
        setUser(firebaseUser)
        setAuthState("ready")
      }
    })
    return unsub
  }, [])

  /* ---- Fetch submissions when ready ---- */
  useEffect(() => {
    if (authState === "ready") fetchSubmissions()
  }, [authState])

  async function fetchSubmissions() {
    setLoading(true)
    setFetchError(null)
    try {
      const q = query(collection(getFirebaseDb(), "mentorSignups"), orderBy("submittedAt", "desc"))
      const snap = await getDocs(q)
      const docs: MentorSubmission[] = snap.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<MentorSubmission, "id">),
      }))
      setSubmissions(docs)
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Failed to fetch submissions."
      setFetchError(msg)
    } finally {
      setLoading(false)
    }
  }

  /* ---- Sign-in ---- */
  async function handleSignIn() {
    setSigningIn(true)
    try {
      await signInWithGoogle()
    } catch {
      // user closed popup or error — auth listener handles state
    } finally {
      setSigningIn(false)
    }
  }

  /* ---- Sign-out ---- */
  async function handleSignOut() {
    await signOutFromFirebase()
    setSubmissions([])
    setUser(null)
    setAuthState("unauthenticated")
  }

  /* ---- Filtering & Sorting ---- */
  const filtered = useMemo(() => {
    let list = [...submissions]

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(
        (s) =>
          `${s.firstName} ${s.lastName}`.toLowerCase().includes(q) ||
          s.email.toLowerCase().includes(q) ||
          s.company.toLowerCase().includes(q) ||
          s.role.toLowerCase().includes(q),
      )
    }

    list.sort((a, b) => {
      let cmp = 0
      switch (sortField) {
        case "date": {
          const aTime = a.submittedAt?.toMillis() ?? 0
          const bTime = b.submittedAt?.toMillis() ?? 0
          cmp = aTime - bTime
          break
        }
        case "name":
          cmp = `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)
          break
        case "company":
          cmp = a.company.localeCompare(b.company)
          break
      }
      return sortDir === "desc" ? -cmp : cmp
    })

    return list
  }, [submissions, searchQuery, sortField, sortDir])

  /* ---- Stats ---- */
  const stats = useMemo(() => {
    const total = submissions.length
    const thisWeek = submissions.filter((s) => isThisWeek(s.submittedAt)).length
    const male = submissions.filter((s) => s.gender === "male").length
    const female = submissions.filter((s) => s.gender === "female").length
    return { total, thisWeek, male, female }
  }, [submissions])

  /* ---- Toggle sort ---- */
  function toggleSort(field: SortField) {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"))
    } else {
      setSortField(field)
      setSortDir(field === "date" ? "desc" : "asc")
    }
  }

  /* ================================================================ */
  /*  Loading                                                          */
  /* ================================================================ */

  if (authState === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  /* ================================================================ */
  /*  Sign-in Screen                                                   */
  /* ================================================================ */

  if (authState === "unauthenticated") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md text-center"
        >
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Shield className="h-8 w-8 text-primary" />
          </div>

          <h1 className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">// admin</h1>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Mentor Signups Dashboard
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-foreground/50">
            Sign in with an authorized Google account to view and manage mentor signup submissions.
          </p>

          <button
            onClick={handleSignIn}
            disabled={signingIn}
            className="mx-auto mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-white/20 hover:bg-white/10 disabled:opacity-50"
          >
            {signingIn ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            )}
            {signingIn ? "Signing in\u2026" : "Sign in with Google"}
          </button>

          <p className="mt-6 text-xs text-foreground/30">Restricted to authorized accounts only.</p>
        </motion.div>
      </div>
    )
  }

  /* ================================================================ */
  /*  Unauthorized                                                     */
  /* ================================================================ */

  if (authState === "unauthorized") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md text-center"
        >
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
            <ShieldAlert className="h-8 w-8 text-red-400" />
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Access Denied</h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-foreground/50">
            <span className="text-foreground/70">{user?.email}</span> is not authorized to access the admin dashboard.
          </p>

          <button
            onClick={handleSignOut}
            className="mx-auto mt-8 flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm text-foreground/60 transition-colors hover:border-white/20 hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </motion.div>
      </div>
    )
  }

  /* ================================================================ */
  /*  Dashboard                                                        */
  /* ================================================================ */

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ---- Header ---- */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h1 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/80">
                Mentor Signups
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-xs text-foreground/40 sm:block">{user?.email}</span>
            <button
              onClick={handleSignOut}
              className="rounded-lg border border-white/10 p-2 text-foreground/40 transition-colors hover:border-white/20 hover:text-foreground/70"
              aria-label="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-12">
        {/* ---- Stats ---- */}
        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <StatCard icon={<Users className="h-4 w-4" />} label="Total" value={stats.total} />
          <StatCard icon={<Calendar className="h-4 w-4" />} label="This Week" value={stats.thisWeek} accent />
          <StatCard icon={<Users className="h-4 w-4" />} label="Male" value={stats.male} />
          <StatCard icon={<Users className="h-4 w-4" />} label="Female" value={stats.female} />
        </div>

        {/* ---- Controls ---- */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative flex-1 sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/30" />
            <input
              type="text"
              placeholder="Search by name, email, company\u2026"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-9 text-sm text-foreground placeholder:text-foreground/25 outline-none transition-colors focus:border-primary/50"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground/60">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Sort + Refresh + Export */}
          <div className="flex items-center gap-2">
            <SortButton label="Date" field="date" current={sortField} dir={sortDir} onClick={toggleSort} />
            <SortButton label="Name" field="name" current={sortField} dir={sortDir} onClick={toggleSort} />
            <SortButton label="Company" field="company" current={sortField} dir={sortDir} onClick={toggleSort} />
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="ml-1 rounded-lg border border-white/10 p-2 text-foreground/40 transition-colors hover:border-white/20 hover:text-foreground/70 disabled:opacity-40"
              aria-label="Refresh"
            >
              <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
            </button>
            <button
              onClick={() => downloadCSV(filtered)}
              disabled={filtered.length === 0}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-foreground/40 transition-colors hover:border-primary/30 hover:text-primary disabled:opacity-25"
              aria-label="Export CSV"
            >
              <FileDown className="h-4 w-4" />
              <span className="hidden sm:inline">CSV</span>
            </button>
          </div>
        </div>

        {/* ---- Error ---- */}
        {fetchError && (
          <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {fetchError}
          </div>
        )}

        {/* ---- Loading ---- */}
        {loading && submissions.length === 0 && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        )}

        {/* ---- Empty ---- */}
        {!loading && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Users className="h-10 w-10 text-foreground/15" />
            <p className="mt-4 text-sm text-foreground/40">
              {searchQuery ? "No submissions match your search." : "No mentor signups yet."}
            </p>
          </div>
        )}

        {/* ---- Submissions ---- */}
        <div className="space-y-3">
          <AnimatePresence initial={false}>
            {filtered.map((sub, idx) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
              >
                <SubmissionCard
                  submission={sub}
                  expanded={expandedId === sub.id}
                  onToggle={() => setExpandedId(expandedId === sub.id ? null : sub.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ---- Count ---- */}
        {filtered.length > 0 && (
          <p className="mt-6 text-center font-mono text-xs text-foreground/25">
            {filtered.length} of {submissions.length} submission{submissions.length !== 1 ? "s" : ""}
          </p>
        )}
      </main>
    </div>
  )
}

/* ================================================================== */
/*  StatCard                                                           */
/* ================================================================== */

function StatCard({ icon, label, value, accent }: { icon: React.ReactNode; label: string; value: number; accent?: boolean }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
      <div className="flex items-center gap-2 text-foreground/40">
        {icon}
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{label}</span>
      </div>
      <p className={cn("mt-3 text-3xl font-semibold tabular-nums", accent ? "text-primary" : "text-foreground")}>
        {value}
      </p>
    </div>
  )
}

/* ================================================================== */
/*  SortButton                                                         */
/* ================================================================== */

function SortButton({
  label,
  field,
  current,
  dir,
  onClick,
}: {
  label: string
  field: SortField
  current: SortField
  dir: SortDir
  onClick: (f: SortField) => void
}) {
  const isActive = current === field
  return (
    <button
      onClick={() => onClick(field)}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors",
        isActive
          ? "border-primary/30 bg-primary/10 text-primary"
          : "border-white/10 text-foreground/40 hover:border-white/20 hover:text-foreground/60",
      )}
    >
      {label}
      {isActive ? (
        dir === "desc" ? <ChevronDown className="h-3 w-3" /> : <ChevronUp className="h-3 w-3" />
      ) : (
        <ArrowUpDown className="h-3 w-3 opacity-40" />
      )}
    </button>
  )
}

/* ================================================================== */
/*  SubmissionCard                                                     */
/* ================================================================== */

function SubmissionCard({
  submission: s,
  expanded,
  onToggle,
}: {
  submission: MentorSubmission
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-colors",
        expanded ? "border-primary/20 bg-white/[0.04]" : "border-white/[0.06] bg-white/[0.02] hover:border-white/10",
      )}
    >
      {/* ---- Collapsed row ---- */}
      <button onClick={onToggle} className="flex w-full items-center gap-4 px-5 py-4 text-left">
        {/* Avatar */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-xs font-semibold text-primary">
          {s.firstName?.[0]}
          {s.lastName?.[0]}
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="truncate text-sm font-semibold text-foreground">
              {s.firstName} {s.lastName}
            </span>
            <span className="hidden truncate text-xs text-foreground/35 sm:block">{s.email}</span>
          </div>
          <div className="mt-0.5 flex items-center gap-3">
            <span className="truncate text-xs text-foreground/45">{s.company}</span>
            <span className="hidden text-xs text-foreground/25 md:block">&middot;</span>
            <span className="hidden truncate text-xs text-foreground/35 md:block">{s.role}</span>
          </div>
        </div>

        {/* Meta */}
        <div className="hidden shrink-0 text-right sm:block">
          <p className="text-xs text-foreground/40">{formatDate(s.submittedAt)}</p>
          <p className="mt-0.5 text-[10px] text-foreground/25">{formatTime(s.submittedAt)}</p>
        </div>

        {/* Badges */}
        <div className="flex shrink-0 items-center gap-2">
          <span
            className={cn(
              "rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider",
              s.gender === "male" ? "bg-blue-500/10 text-blue-400" : "bg-pink-500/10 text-pink-400",
            )}
          >
            {s.gender || "—"}
          </span>
          <span className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-foreground/40">
            {s.shirtSize || "—"}
          </span>
        </div>

        {/* Chevron */}
        <div className="shrink-0 text-foreground/25">
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>

      {/* ---- Expanded details ---- */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/[0.06] px-5 py-5">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <DetailItem icon={<Mail className="h-3.5 w-3.5" />} label="Email" value={s.email} />
                <DetailItem icon={<Phone className="h-3.5 w-3.5" />} label="Phone" value={s.phoneNumber} />
                <DetailItem icon={<Building2 className="h-3.5 w-3.5" />} label="Company" value={s.company} />
                <DetailItem icon={<Users className="h-3.5 w-3.5" />} label="Role" value={s.role} />
                <DetailItem icon={<Shirt className="h-3.5 w-3.5" />} label="Shirt Size" value={s.shirtSize || "—"} />
                <DetailItem
                  icon={<MessageSquare className="h-3.5 w-3.5" />}
                  label="WhatsApp"
                  value={s.whatsappConsent === "yes" ? "Yes" : s.whatsappConsent === "no" ? "No" : "—"}
                />
              </div>

              {/* Expertise */}
              {s.expertise && (
                <div className="mt-5">
                  <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/35">Expertise</p>
                  <p className="text-sm leading-relaxed text-foreground/70">{s.expertise}</p>
                </div>
              )}

              {/* Contributions */}
              {s.contributions?.length > 0 && (
                <div className="mt-5">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/35">
                    Contributions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.contributions.map((c) => (
                      <span key={c} className="rounded-lg border border-primary/15 bg-primary/5 px-2.5 py-1 text-xs text-primary/80">
                        {contributionLabels[c] ?? c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Questions */}
              {s.questions && (
                <div className="mt-5">
                  <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/35">
                    Notes / Questions
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/70">{s.questions}</p>
                </div>
              )}

              {/* Meta */}
              <div className="mt-5 flex items-center gap-4 border-t border-white/[0.04] pt-4 font-mono text-[10px] text-foreground/20">
                <span>ID: {s.id.slice(0, 8)}</span>
                <span>Source: {s.source || "—"}</span>
                <span>Submitted: {formatDate(s.submittedAt)} {formatTime(s.submittedAt)}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ================================================================== */
/*  DetailItem                                                         */
/* ================================================================== */

function DetailItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="mt-0.5 text-foreground/25">{icon}</div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/30">{label}</p>
        <p className="mt-0.5 text-sm text-foreground/75">{value}</p>
      </div>
    </div>
  )
}

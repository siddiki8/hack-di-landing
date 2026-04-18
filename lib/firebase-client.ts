import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app"
import { getAuth, signInAnonymously, GoogleAuthProvider, signInWithPopup, signOut, type Auth, type User } from "firebase/auth"
import { getFirestore, type Firestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

const publicFirebaseEnvVars = {
  NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
} as const

export const missingFirebaseEnvVars = Object.entries(publicFirebaseEnvVars)
  .filter(([, value]) => !value)
  .map(([key]) => key)

export const isFirebaseConfigured = missingFirebaseEnvVars.length === 0

function getFirebaseApp(): FirebaseApp {
  if (!isFirebaseConfigured) {
    throw new Error(`Missing Firebase env vars: ${missingFirebaseEnvVars.join(", ")}`)
  }

  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
}

export function getFirebaseDb(): Firestore {
  return getFirestore(getFirebaseApp())
}

export function getFirebaseAuth(): Auth {
  return getAuth(getFirebaseApp())
}

export async function ensureFirebaseAnonymousSession(): Promise<User | null> {
  const auth = getFirebaseAuth()

  if (auth.currentUser) {
    return auth.currentUser
  }

  try {
    const credential = await signInAnonymously(auth)
    return credential.user
  } catch {
    return null
  }
}

export async function signInWithGoogle(): Promise<User> {
  const auth = getFirebaseAuth()
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  return result.user
}

export async function signOutFromFirebase(): Promise<void> {
  return signOut(getFirebaseAuth())
}

export const ADMIN_EMAILS: string[] = (process.env.NEXT_PUBLIC_ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean)

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email || ADMIN_EMAILS.length === 0) return false
  return ADMIN_EMAILS.includes(email.trim().toLowerCase())
}
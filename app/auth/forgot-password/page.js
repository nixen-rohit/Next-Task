"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setSent(true);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-8">

        {/* Logo */}
        <div className="w-10 h-10 bg-[purple-600 ]rounded-xl flex items-center justify-center mb-8">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        {sent ? (
          /* Success state */
          <div className="flex flex-col items-center text-center gap-4 py-4">
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-white">Check your email</h1>
            <p className="text-sm text-neutral-500">
              We sent a password reset link to{" "}
              <span className="text-neutral-300">{email}</span>
            </p>
            <a
              href="/login"
              className="mt-2 text-sm text-purple-400 hover:text-purple-300 transition font-medium"
            >
              Back to sign in
            </a>
          </div>
        ) : (
          /* Form state */
          <>
            <h1 className="text-2xl font-semibold text-white mb-1">Forgot password?</h1>
            <p className="text-sm text-neutral-500 mb-8">
              Enter your email and we'll send you a reset link
            </p>

            <form onSubmit={handleReset} className="flex flex-col gap-5">

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-neutral-300">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="bg-neutral-800 border border-neutral-700 text-white text-sm rounded-lg px-4 py-2.5 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg py-2.5 transition flex items-center justify-center gap-2"
              >
                {loading && (
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                )}
                {loading ? "Sending..." : "Send reset link"}
              </button>

            </form>

            <p className="text-sm text-neutral-600 text-center mt-6">
              Remember your password?{" "}
              <a href="/login" className="text-purple-400 hover:text-purple-300 transition font-medium">
                Sign in
              </a>
            </p>
          </>
        )}

      </div>
    </div>
  );
}
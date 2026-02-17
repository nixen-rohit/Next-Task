"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("LOGIN SUCCESS:", userCredential.user);

   router.replace("/");
router.refresh();

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    alert(error.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-8">

        {/* Logo */}
        <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center mb-8">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-white mb-1">Welcome back</h1>
        <p className="text-sm text-neutral-500 mb-8">Sign in to your account to continue</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-neutral-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="bg-neutral-800 border border-neutral-700 text-white text-sm rounded-lg px-4 py-2.5 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-neutral-300">Password</label>
              <a href="/auth/forgot-password" className="text-xs text-purple-400 hover:text-purple-300 transition">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="bg-neutral-800 border border-neutral-700 text-white text-sm rounded-lg px-4 py-2.5 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg py-2.5 transition flex items-center justify-center gap-2 mt-1"
          >
            {loading && (
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
            )}
            {loading ? "Signing in..." : "Sign in"}
          </button>

        </form>

        {/* Footer */}
        <p className="text-sm text-neutral-600 text-center mt-6">
          Don't have an account?{" "}
          <a href="/auth/register" className="text-purple-400 hover:text-purple-300 transition font-medium">
            Register Now
          </a>
        </p>

      </div>
    </div>
  );
}
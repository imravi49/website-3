// src/components/AdminPanel.jsx
import React, { useEffect, useState } from "react";
import { auth } from "../firebase"; // uses your src/firebase.js
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const ADMIN_EMAIL = "ravi.rv73838@gmail.com";

export default function AdminPanel() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailLogin, setEmailLogin] = useState({ email: "", password: "" });
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  async function handleGoogle() {
    try {
      const res = await signInWithPopup(auth, provider);
      if (res.user.email !== ADMIN_EMAIL) {
        await signOut(auth);
        alert("Access denied — not an admin email.");
        return;
      }
      setUser(res.user);
    } catch (e) {
      console.error(e);
      alert("Google sign-in failed.");
    }
  }

  async function handleEmailSignIn(e) {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        emailLogin.email,
        emailLogin.password
      );
      if (res.user.email !== ADMIN_EMAIL) {
        await signOut(auth);
        alert("Access denied — not an admin email.");
        return;
      }
      setUser(res.user);
    } catch (err) {
      console.error(err);
      alert("Email sign-in failed: " + err.message);
    }
  }

  async function handleSignOut() {
    await signOut(auth);
    setUser(null);
  }

  if (loading) return <div className="p-8">Checking auth...</div>;

  if (!user) {
    return (
      <div className="max-w-xl mx-auto p-8">
        <h2 className="text-2xl font-elegant mb-4">Admin Login</h2>

        <div className="mb-6">
          <button
            onClick={handleGoogle}
            className="px-4 py-2 rounded bg-gold text-black"
          >
            Sign in with Google
          </button>
        </div>

        <div className="border-t pt-6">
          <form onSubmit={handleEmailSignIn} className="space-y-3">
            <div>
              <label className="block text-sm">Email</label>
              <input
                required
                type="email"
                value={emailLogin.email}
                onChange={(e) =>
                  setEmailLogin({ ...emailLogin, email: e.target.value })
                }
                className="w-full p-2 rounded bg-white/5"
              />
            </div>

            <div>
              <label className="block text-sm">Password</label>
              <input
                required
                type="password"
                value={emailLogin.password}
                onChange={(e) =>
                  setEmailLogin({ ...emailLogin, password: e.target.value })
                }
                className="w-full p-2 rounded bg-white/5"
              />
            </div>

            <div className="flex gap-3">
              <button type="submit" className="px-4 py-2 rounded bg-gold">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Logged-in admin view
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-elegant">Admin Dashboard</h1>
        <div>
          <span className="mr-4">Signed in as: {user.email}</span>
          <button onClick={handleSignOut} className="px-3 py-2 rounded border">
            Sign out
          </button>
        </div>
      </div>

      {/* Replace below with real admin controls (WYSIWYG editor, image uploader, counters, SEO) */}
      <section className="p-4 rounded bg-white/5">
        <h2 className="font-elegant text-xl mb-2">Content Management</h2>
        <p>This is the admin area — add your WYSIWYG, image uploader, counters UI here.</p>

        {/* Example: button to open a simple media uploader modal (you'll implement) */}
        <div className="mt-6">
          <button className="px-4 py-2 rounded bg-gold">Open Media Manager</button>
        </div>
      </section>
    </div>
  );
}

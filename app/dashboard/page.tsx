import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Demo User Profile</p>
            <h1 className="text-4xl font-semibold tracking-tight">Welcome back, Alex!</h1>
            <p className="mt-3 max-w-2xl text-slate-300">
              This is your demo dashboard. Review your profile details, recent activity, and account status below.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:text-white"
          >
            Logout
          </Link>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl shadow-slate-950/20">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">Account status</p>
                <p className="mt-3 text-2xl font-semibold text-slate-100">Premium demo user</p>
              </div>
              <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300 ring-1 ring-cyan-500/20">
                Active now
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-2 text-lg font-medium text-slate-100">alex@example.com</p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Member since</p>
                <p className="mt-2 text-lg font-medium text-slate-100">January 2026</p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <div className="rounded-3xl bg-slate-950 p-6">
                <h2 className="text-xl font-semibold text-slate-100">Profile details</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-slate-400">Full name</p>
                    <p className="mt-1 text-base text-slate-100">Alex Johnson</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="mt-1 text-base text-slate-100">San Francisco, CA</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Role</p>
                    <p className="mt-1 text-base text-slate-100">Product Designer</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Team</p>
                    <p className="mt-1 text-base text-slate-100">Growth & Design</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6">
                <h2 className="text-xl font-semibold text-slate-100">Recent activity</h2>
                <ul className="mt-4 space-y-4 text-slate-300">
                  <li className="rounded-3xl bg-slate-900 p-4">
                    <p className="text-sm text-slate-400">April 26, 2026</p>
                    <p className="mt-1 text-base">Completed onboarding setup and activated new features.</p>
                  </li>
                  <li className="rounded-3xl bg-slate-900 p-4">
                    <p className="text-sm text-slate-400">April 18, 2026</p>
                    <p className="mt-1 text-base">Updated project preferences and notification settings.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-xl font-semibold text-slate-100">Your quick stats</h2>
            <div className="mt-6 space-y-5">
              <div className="rounded-3xl bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Projects</p>
                <p className="mt-2 text-3xl font-semibold text-slate-100">12</p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Tasks completed</p>
                <p className="mt-2 text-3xl font-semibold text-slate-100">78</p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Member perks</p>
                <p className="mt-2 text-3xl font-semibold text-slate-100">3</p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

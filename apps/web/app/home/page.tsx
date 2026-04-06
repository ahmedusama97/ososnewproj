import Link from "next/link";

const popularDestinations = [
  {
    country: "United Kingdom",
    visaType: "Standard Visitor",
    icon: "location_on",
    tone: "bg-[#d3e4ff] text-[#004881]",
  },
  {
    country: "Schengen Area",
    visaType: "Tourism & Business",
    icon: "euro",
    tone: "bg-[#9df2b2] text-[#005228]",
  },
  {
    country: "USA",
    visaType: "B1/B2 Visa",
    icon: "star",
    tone: "bg-[#ffdcc7] text-[#723600]",
  },
  {
    country: "Turkey",
    visaType: "e-Visa",
    icon: "explore",
    tone: "bg-[#e5e2e1] text-[#574235]",
  },
];

const footerGroups = [
  {
    title: "Quick Links",
    links: ["Embassy Directory", "Visa Requirements", "Track Application", "Contact Support"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Compliance"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b]">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(255,128,0,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(18,108,57,0.07),transparent_26%),radial-gradient(circle_at_top_right,rgba(27,96,162,0.06),transparent_22%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(120deg,transparent_0%,rgba(28,27,27,0.22)_50%,transparent_100%)]" />

      <header className="fixed top-0 z-50 w-full border-b border-[#dfc1af]/40 bg-[#fcf9f8]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-screen-2xl items-center justify-between px-6 md:px-8">
          <div className="text-xl font-bold tracking-tight">Global Mobility</div>
          <nav className="flex items-center gap-8">
            <a className="text-sm font-medium tracking-tight text-[#574235] transition hover:text-[#1c1b1b]" href="#">
              Visas
            </a>
          </nav>
        </div>
      </header>

      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#964900]/5 blur-3xl" />
          <div className="absolute -bottom-48 -right-48 h-[32rem] w-[32rem] rounded-full bg-[#126c39]/5 blur-3xl" />
        </div>

        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center">
          <div className="mb-16 transition-transform duration-500 active:scale-95">
            <Link
              href="/apply"
              className="group relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#964900] to-[#ff8000] px-12 py-6 text-white shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              <span className="z-10 text-lg font-bold tracking-tight">Start Application</span>
              <span className="material-symbols-outlined z-10 ml-3 transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>

          <div className="w-full text-center">
            <h2 className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#574235]">
              Popular Visa Destinations
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {popularDestinations.map((item) => (
                <button
                  key={item.country}
                  className="group flex flex-col items-center rounded-[24px] border border-[#dfc1af]/30 bg-white/80 p-6 transition-all duration-300 hover:bg-[#eae7e7]"
                >
                  <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${item.tone} transition-transform group-hover:scale-110`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <span className="font-bold text-[#1c1b1b]">{item.country}</span>
                  <span className="mt-1 text-xs text-[#574235]">{item.visaType}</span>
                </button>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/apply" className="inline-flex items-center gap-1 text-sm font-semibold text-[#964900] hover:underline">
                Browse all destinations
                <span className="material-symbols-outlined text-sm">keyboard_arrow_right</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto w-full border-t border-[#dfc1af]/30 bg-white">
        <div className="mx-auto max-w-screen-2xl px-8 py-12">
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
            <div>
              <div className="mb-4 text-lg font-bold tracking-tight">Global Mobility</div>
              <p className="text-sm leading-relaxed text-[#574235]">
                Simplifying international travel and residency with a cleaner visa intake experience.
              </p>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-6 font-bold text-[#1c1b1b]">{group.title}</h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a className="text-sm text-[#574235] transition-colors hover:text-[#964900]" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="mb-6 font-bold text-[#1c1b1b]">Connect</h4>
              <div className="mb-6 flex gap-4">
                {['public', 'chat', 'mail'].map((icon) => (
                  <a
                    key={icon}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0eded] text-[#574235] transition-all hover:bg-[#964900] hover:text-white"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[20px]">{icon}</span>
                  </a>
                ))}
              </div>
              <p className="text-xs italic text-[#574235]">Trusted by over 10,000+ travelers worldwide.</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#dfc1af]/20 pt-8 text-center md:flex-row">
            <p className="text-xs text-[#574235]">© 2026 VisaFlow. All rights reserved.</p>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#574235]">
              Secure Global Processing
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

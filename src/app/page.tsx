export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <section className="relative min-h-screen">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(155deg,#7eb6dc_0%,#b7d8ec_34%,#e8f2f7_58%,#f4efe4_100%)]"
        />
        <div
          aria-hidden
          className="animate-shimmer pointer-events-none absolute top-[-10%] right-[-5%] h-[55vh] w-[55vh] bg-[radial-gradient(circle,#ffe9a8_0%,transparent_68%)]"
        />
        <div
          aria-hidden
          className="animate-float-coin pointer-events-none absolute inset-y-0 right-0 flex w-full max-w-2xl items-center justify-center md:w-[55%]"
        >
          <DogeCoinVisual />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-20 lg:px-10">
          <div className="max-w-xl">
            <p className="animate-rise font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight text-navy sm:text-6xl md:text-7xl">
              Dogecoin
            </p>
            <h1 className="animate-rise-delay mt-6 font-[family-name:var(--font-display)] text-3xl leading-[1.12] font-bold tracking-tight text-navy sm:text-4xl md:text-[2.75rem]">
              Much UK. Very soon.
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-md text-lg leading-relaxed text-navy/70">
              dogecoin.co.uk is coming online as a friendly home for DOGE in the
              UK — stories, guides, and community energy.
            </p>
            <div className="animate-rise-delay-2 mt-9 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@dogecoin.co.uk?subject=Dogecoin.co.uk%20hello"
                className="inline-flex items-center justify-center bg-navy px-6 py-3 text-sm font-semibold tracking-wide text-sand transition hover:bg-navy/90"
              >
                Say hello
              </a>
              <a
                href="#soon"
                className="inline-flex items-center justify-center border border-navy/25 px-6 py-3 text-sm font-semibold tracking-wide text-navy transition hover:border-navy/45"
              >
                What&apos;s next
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="soon"
        className="relative border-t border-navy/10 bg-sand px-6 py-16 lg:px-10"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-navy sm:text-3xl">
            A landing pad while we build.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            This domain is live on Vercel. Next up: clear explainers, UK-focused
            resources, and a place the community can rally around — without the
            noise.
          </p>
        </div>
      </section>

      <footer className="relative border-t border-navy/10 px-6 py-8 text-sm text-navy/50 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-[family-name:var(--font-display)] font-semibold text-navy/70">
            Dogecoin
          </span>
          <span>
            © {new Date().getFullYear()} dogecoin.co.uk · Unofficial community
            site
          </span>
        </div>
      </footer>
    </main>
  );
}

function DogeCoinVisual() {
  return (
    <svg
      viewBox="0 0 520 520"
      role="img"
      aria-label="Stylised Dogecoin gold disc"
      className="h-auto w-[min(92%,28rem)]"
    >
      <defs>
        <radialGradient id="coinFace" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffe7a0" />
          <stop offset="55%" stopColor="#e2b43a" />
          <stop offset="100%" stopColor="#b8891a" />
        </radialGradient>
        <radialGradient id="coinRim" cx="50%" cy="50%" r="50%">
          <stop offset="80%" stopColor="#c99620" />
          <stop offset="100%" stopColor="#8f6a12" />
        </radialGradient>
      </defs>
      <circle cx="260" cy="270" r="190" fill="#1b2a4a" fillOpacity="0.1" />
      <circle cx="260" cy="260" r="188" fill="url(#coinRim)" />
      <circle cx="260" cy="260" r="164" fill="url(#coinFace)" />
      <circle
        cx="260"
        cy="260"
        r="146"
        fill="none"
        stroke="#fff6d4"
        strokeOpacity="0.55"
        strokeWidth="3"
      />
      <text
        x="260"
        y="292"
        textAnchor="middle"
        fill="#1b2a4a"
        fontFamily="system-ui, sans-serif"
        fontSize="132"
        fontWeight="800"
      >
        Ð
      </text>
      <text
        x="260"
        y="348"
        textAnchor="middle"
        fill="#1b2a4a"
        fillOpacity="0.7"
        fontFamily="system-ui, sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="6"
      >
        DOGE
      </text>
    </svg>
  );
}

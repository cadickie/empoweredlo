export default function EmpoweredLORecruitingPage() {
  const pillars = [
    {
      title: "Built for growth",
      copy:
        "A platform for loan officers who want more than a desk and a rate sheet. Get the products, people, and support to grow real market share and build something meaningful."
    },
    {
      title: "Support that actually shows up",
      copy:
        "Fast access to leadership, responsive operations, and a team that understands how important every file, every client, and every referral relationship really is."
    },
    {
      title: "More ways to win",
      copy:
        "From traditional lending to strong non QM solutions, EmpoweredLO is designed for originators who want more answers, more options, and more confidence in the field."
    }
  ];

  const reasons = [
    "Leadership that helps you grow, not just report numbers",
    "A platform that supports both self generated business and expansion",
    "Products that help you solve more client scenarios",
    "Operational support that protects your reputation",
    "A culture built around accountability, trust, and momentum",
    "A place where top producers can lead and enjoy the ride"
  ];

  const idealFor = [
    "Loan officers ready to grow production with the right support",
    "Producers who want stronger non QM and portfolio options",
    "Branch leaders looking to build a team the right way",
    "Originators who are tired of noise, friction, and empty promises"
  ];

  const testimonials = [
    {
      quote:
        "What stood out to me was the access. Real people. Real answers. Real support when it matters most.",
      name: "Top Producing Loan Officer"
    },
    {
      quote:
        "This feels like a place where you can grow your business without losing your identity.",
      name: "Branch Leader"
    },
    {
      quote:
        "The difference is not just product. It is the way leadership leans in to help you win.",
      name: "Retail Recruit"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-3xl text-white">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                EmpoweredLO
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Empowering loan officers to grow, lead, and actually enjoy the ride.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                If you are producing, building, or ready for more, EmpoweredLO was made for you. This is a recruiting page for originators who want better support, stronger products, real leadership access, and a platform that helps them build something bigger.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#connect"
                  className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg transition hover:scale-[1.01]"
                >
                  Schedule a confidential conversation
                </a>
                <a
                  href="#why"
                  className="rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  See what makes this different
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <div className="text-2xl font-semibold">More options</div>
                  <div className="mt-1 text-sm text-slate-200">Solve more borrower scenarios</div>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <div className="text-2xl font-semibold">Real support</div>
                  <div className="mt-1 text-sm text-slate-200">Responsive people behind you</div>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <div className="text-2xl font-semibold">Room to build</div>
                  <div className="mt-1 text-sm text-slate-200">For producers and future leaders</div>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  For the right loan officer
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                  You should explore this if you want:
                </h2>
                <div className="mt-6 space-y-4">
                  {idealFor.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
                  <p className="text-sm leading-6 text-slate-200">
                    Quietly exploring your next move? Start with a private conversation. No pressure. No assumptions. Just a real discussion about what you want to build.
                  </p>
                  <a
                    href="#connect"
                    className="mt-4 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900"
                  >
                    Start the conversation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Why EmpoweredLO
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A recruiting page built around what top producers actually care about.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Not fluff. Not corporate theater. Just the things that matter when your name, your pipeline, and your reputation are on the line.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{pillar.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                What you gain
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                A stronger platform should make life easier and growth more realistic.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The right move is not only about compensation. It is about confidence, support, speed, leadership, and the ability to compete without feeling like you are doing it alone.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <p className="text-sm font-medium leading-6 text-slate-800">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-10 text-white lg:px-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                The message
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                You do not need more noise. You need a platform that helps you win.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                EmpoweredLO is for people who still care about the craft, the client, and the long game. The goal is simple: help great loan officers become even more effective, more profitable, and more fulfilled in the business they have worked so hard to build.
              </p>
            </div>
            <div className="grid gap-4">
              {testimonials.map((item) => (
                <div key={item.quote} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="text-lg leading-8 text-slate-100">“{item.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-slate-300">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="connect" className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Confidential conversation
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let’s talk about what you want next.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you want better execution, stronger products, more leadership support, or a real path to building a team, this starts with a conversation. No pressure. Just clarity.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 rounded-[2rem] bg-slate-50 p-4 text-left shadow-sm ring-1 ring-slate-200 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border-0 bg-white px-5 py-4 text-base outline-none ring-1 ring-slate-200 placeholder:text-slate-400"
            />
            <input
              type="email"
              placeholder="Email address"
              className="rounded-2xl border-0 bg-white px-5 py-4 text-base outline-none ring-1 ring-slate-200 placeholder:text-slate-400"
            />
            <input
              type="text"
              placeholder="Current company"
              className="rounded-2xl border-0 bg-white px-5 py-4 text-base outline-none ring-1 ring-slate-200 placeholder:text-slate-400"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="rounded-2xl border-0 bg-white px-5 py-4 text-base outline-none ring-1 ring-slate-200 placeholder:text-slate-400"
            />
            <textarea
              placeholder="What are you hoping to build or improve?"
              rows={5}
              className="sm:col-span-2 rounded-2xl border-0 bg-white px-5 py-4 text-base outline-none ring-1 ring-slate-200 placeholder:text-slate-400"
            />
            <button className="sm:col-span-2 rounded-2xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:scale-[1.01]">
              Request a private conversation
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Prefer a direct introduction? Add your best contact info and we will reach out personally.
          </p>
        </div>
      </section>
    </div>
  );
}

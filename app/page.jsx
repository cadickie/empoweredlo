export default function Home() {
  const sectionStyle = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 24px",
  };

  const heroCardStyle = {
    background: "rgba(255,255,255,0.08)",
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.12)",
  };

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  };

  const darkCardStyle = {
    background: "#0f172a",
    color: "#ffffff",
    borderRadius: "22px",
    padding: "34px",
    boxShadow: "0 14px 40px rgba(15, 23, 42, 0.22)",
  };

  const buttonPrimary = {
    display: "inline-block",
    background: "rgba(255,255,255,0.10)",
    color: "#ffffff",
    padding: "14px 22px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 600,
    border: "1px solid rgba(255,255,255,0.18)",
    backdropFilter: "blur(6px)",
  };

  const buttonSecondary = {
    display: "inline-block",
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
    padding: "14px 22px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 600,
    border: "1px solid rgba(255,255,255,0.18)",
  };

  const lightButton = {
    display: "inline-block",
    background: "#111827",
    color: "#ffffff",
    padding: "14px 22px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 600,
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#111827",
        background: "#f8fafc",
      }}
    >
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#ffffff",
          padding: "88px 0 76px",
        }}
      >
        <div style={sectionStyle}>
          <div style={{ maxWidth: "760px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.03em",
                marginBottom: "22px",
              }}
            >
              Become an Empowered Loan Officer
            </div>

            <h1
              style={{
                fontSize: "54px",
                lineHeight: 1.08,
                margin: "0 0 18px",
                fontWeight: 700,
                maxWidth: "760px",
              }}
            >
               If you’re producing but feel capped, it’s not you. It’s your platform.
            </h1>

            <p
              style={{
                fontSize: "21px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.88)",
                margin: "0 0 14px",
                maxWidth: "720px",
              }}
            >
              The right platform doesn’t just support you. It expands what you’re capable of.
            </p>

            <div
              style={{
                fontSize: "19px",
                fontWeight: 500,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.92)",
                margin: "0 0 16px",
                maxWidth: "700px",
              }}
            >
              If something feels in the way, it usually is. Guidelines, pricing, territory, support, or slow decision making.
            </div>
<div
  style={{
    fontSize: "18px",
    color: "rgba(255,255,255,0.85)",
    margin: "0 0 16px",
  }}
>
  If that resonates, it’s worth a conversation.
</div>
            <p
              style={{
                color: "rgba(255,255,255,0.68)",
                fontSize: "15px",
                lineHeight: 1.7,
                margin: "0 0 28px",
                maxWidth: "720px",
              }}
            >
              Supporting loan officers across 48 states with direct access to underwriting and proprietary non QM products.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginBottom: "34px",
              }}
            >
              <a
                href="https://calendly.com/chrisdickie-changemortgage"
                target="_blank"
                rel="noopener noreferrer"
                style={buttonPrimary}
              >
                Schedule a confidential call
              </a>

              <a href="#why" style={buttonSecondary}>
                See what makes this different
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              <div style={heroCardStyle}>
                <div style={{ fontSize: "21px", fontWeight: 700, marginBottom: "8px" }}>
                  Real autonomy
                </div>
                <div style={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.65 }}>
                  No micromanaging. Built for serious producers who want room to operate.
                </div>
              </div>

              <div style={heroCardStyle}>
                <div style={{ fontSize: "21px", fontWeight: 700, marginBottom: "8px" }}>
                  No territorial boundaries
                </div>
                <div style={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.65 }}>
                  Go where the business is. No territory holding you back.
                </div>
              </div>

              <div style={heroCardStyle}>
                <div style={{ fontSize: "21px", fontWeight: 700, marginBottom: "8px" }}>
                  More ways to win
                </div>
                <div style={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.65 }}>
                  Access proprietary products and flexible guidelines to structure deals others can’t.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0 10px" }}>
        <div style={sectionStyle}>
          <p
            style={{
              maxWidth: "880px",
              margin: "0 auto",
              textAlign: "center",
              fontSize: "18px",
              lineHeight: 1.75,
              color: "#334155",
            }}
          >
            Backed by a platform designed to handle more complex scenarios, with direct access to decision makers and the flexibility to structure deals that other lenders turn away.
          </p>
        </div>
      </section>

      <section id="why" style={{ padding: "60px 0 28px" }}>
        <div style={sectionStyle}>
          <div style={{ maxWidth: "800px", marginBottom: "34px" }}>
            <div
              style={{
                color: "#475569",
                fontWeight: 700,
                marginBottom: "12px",
                letterSpacing: "0.04em",
                fontSize: "13px",
              }}
            >
              WHY EMPOWEREDLO
            </div>

            <h2
              style={{
                fontSize: "40px",
                lineHeight: 1.2,
                margin: "0 0 16px",
              }}
            >
              A better platform should help you grow faster, compete harder, and enjoy the business again.
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: 1.75,
                color: "#475569",
                margin: 0,
              }}
            >
              The right move is not just about compensation. It is about freedom, support, credibility, and having the right people and products behind you when it matters most.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={cardStyle}>
              <h3 style={{ margin: "0 0 12px", fontSize: "24px" }}>
                Freedom to build your business your way
              </h3>
              <p style={{ color: "#475569", lineHeight: 1.75, margin: 0 }}>
                This is for loan officers who do not want to be boxed in by excessive oversight, rigid structures, or unnecessary interference.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ margin: "0 0 12px", fontSize: "24px" }}>
                Leadership access that actually matters
              </h3>
              <p style={{ color: "#475569", lineHeight: 1.75, margin: 0 }}>
                When a deal gets complex or time matters, access matters. Real support and real decision makers make a real difference.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ margin: "0 0 12px", fontSize: "24px" }}>
                A bigger runway for growth
              </h3>
              <p style={{ color: "#475569", lineHeight: 1.75, margin: 0 }}>
                No territorial boundaries means you can build where the opportunity is, not just where someone says you are allowed to play.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "20px 0 30px" }}>
        <div style={sectionStyle}>
          <div style={darkCardStyle}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.68)",
                    fontWeight: 700,
                    marginBottom: "12px",
                    letterSpacing: "0.04em",
                    fontSize: "13px",
                  }}
                >
                  WHAT MAKES THIS DIFFERENT
                </div>

                <h2
                  style={{
                    fontSize: "36px",
                    lineHeight: 1.2,
                    margin: "0 0 16px",
                  }}
                >
                  Built for serious loan officers who want room to produce and room to grow.
                </h2>

                <p
                  style={{
                    color: "rgba(255,255,255,0.82)",
                    lineHeight: 1.8,
                    margin: 0,
                    fontSize: "17px",
                  }}
                >
                  You should not have to choose between support and freedom. The best platform gives you both. It gives you access when you need it and space when you do not.
                </p>
              </div>

              <div>
                <div style={{ marginBottom: "14px", lineHeight: 1.7 }}>
                  Autonomy without micromanaging
                </div>
                <div style={{ marginBottom: "14px", lineHeight: 1.7 }}>
                  No territorial boundaries limiting your upside
                </div>
                <div style={{ marginBottom: "14px", lineHeight: 1.7 }}>
                  Strong product depth for more borrower scenarios
                </div>
                <div style={{ marginBottom: "14px", lineHeight: 1.7 }}>
                  Real support that protects your reputation
                </div>
                <div style={{ lineHeight: 1.7 }}>
                  A platform that can help you build something meaningful over time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "18px 0 30px" }}>
        <div style={sectionStyle}>
          <div style={cardStyle}>
            <div
              style={{
                color: "#475569",
                fontWeight: 700,
                marginBottom: "12px",
                letterSpacing: "0.04em",
                fontSize: "13px",
              }}
            >
              WHO THIS IS FOR
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "18px",
              }}
            >
              <div>
                <p style={{ margin: "0 0 12px", lineHeight: 1.75, color: "#334155" }}>
                  Loan officers who are producing and want more control over how they grow.
                </p>
                <p style={{ margin: "0 0 12px", lineHeight: 1.75, color: "#334155" }}>
                  Producers who want more ways to win without adding unnecessary friction.
                </p>
              </div>

              <div>
                <p style={{ margin: "0 0 12px", lineHeight: 1.75, color: "#334155" }}>
                  Leaders who want to build beyond geographic limits.
                </p>
                <p style={{ margin: 0, lineHeight: 1.75, color: "#334155" }}>
                  People who value support, but don’t want to be managed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="connect" style={{ padding: "18px 0 88px" }}>
        <div style={sectionStyle}>
          <div style={{ ...cardStyle, textAlign: "center" }}>
            <div
              style={{
                color: "#475569",
                fontWeight: 700,
                marginBottom: "12px",
                letterSpacing: "0.04em",
                fontSize: "13px",
              }}
            >
              CONFIDENTIAL CONVERSATION
            </div>

            <h2
              style={{
                fontSize: "40px",
                lineHeight: 1.2,
                margin: "0 0 16px",
              }}
            >
              Let’s talk about what you want to build next.
            </h2>

            <p
              style={{
                maxWidth: "760px",
                margin: "0 auto 28px",
                color: "#475569",
                lineHeight: 1.8,
                fontSize: "18px",
              }}
            >
              If autonomy, unlimited growth, and a stronger platform matter to you, let’s have a quick and confidential conversation.
            </p>

            <div style={{ marginBottom: "12px" }}>
              <a
                href="https://calendly.com/chrisdickie-changemortgage"
                target="_blank"
                rel="noopener noreferrer"
                style={lightButton}
              >
                Schedule time on my calendar
              </a>
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "#64748b",
                marginBottom: "14px",
              }}
            >
              Prefer email? Reach me directly at{" "}
              <a
                href="mailto:cdickie@changemtg.com"
                style={{ color: "#111827", fontWeight: 600, textDecoration: "none" }}
              >
                cdickie@changemtg.com
              </a>
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#64748b",
                marginTop: "10px",
              }}
            >
              No pressure. Just a real conversation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

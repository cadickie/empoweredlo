export default function Home() {
  const section = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  };

  const card = {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
    padding: "32px",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  };

  const darkButton = {
    display: "inline-block",
    background: "#0f172a",
    color: "#ffffff",
    padding: "14px 20px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 600,
  };

  const lightButton = {
    display: "inline-block",
    background: "transparent",
    color: "#0f172a",
    padding: "14px 20px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 600,
    border: "1px solid #cbd5e1",
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f8fafc",
        color: "#0f172a",
      }}
    >
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#ffffff",
          padding: "90px 0 70px",
        }}
      >
        <div style={section}>
          <div style={{ maxWidth: "780px" }}>
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
              EmpoweredLO
            </div>

            <h1
              style={{
                fontSize: "52px",
                lineHeight: 1.08,
                margin: "0 0 18px",
                fontWeight: 700,
                maxWidth: "760px",
              }}
            >
              You’ve outgrown your current platform
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.88)",
                margin: 0,
                maxWidth: "740px",
              }}
            >
              Whether you are producing or leading, there comes a point where your environment no longer matches your ambition.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 0" }}>
        <div style={section}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            <div style={card}>
              <div
                style={{
                  color: "#475569",
                  fontWeight: 700,
                  marginBottom: "12px",
                  letterSpacing: "0.04em",
                  fontSize: "13px",
                }}
              >
                PRODUCER
              </div>

              <h2
                style={{
                  fontSize: "32px",
                  lineHeight: 1.2,
                  margin: "0 0 16px",
                }}
              >
                I’m a top producing LO
              </h2>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.75,
                  color: "#334155",
                  margin: "0 0 24px",
                  maxWidth: "420px",
                }}
              >
                I want to close more loans with a process I can trust from start to finish.
              </p>

              <a href="/producer" style={darkButton}>
                This is me →
              </a>
            </div>

            <div style={card}>
              <div
                style={{
                  color: "#475569",
                  fontWeight: 700,
                  marginBottom: "12px",
                  letterSpacing: "0.04em",
                  fontSize: "13px",
                }}
              >
                LEADER
              </div>

              <h2
                style={{
                  fontSize: "32px",
                  lineHeight: 1.2,
                  margin: "0 0 16px",
                }}
              >
                I lead a team of LOs
              </h2>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.75,
                  color: "#334155",
                  margin: "0 0 24px",
                  maxWidth: "420px",
                }}
              >
                I want autonomy, real support, and the ability to grow without limits.
              </p>

              <a href="/leader" style={darkButton}>
                This is me →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#475569",
                maxWidth: "760px",
                margin: "0 auto 20px",
              }}
            >
              Supporting loan officers across 48 states with direct access to underwriting and proprietary non QM products.
            </p>

            <a
              href="https://calendly.com/chrisdickie-changemortgage"
              target="_blank"
              rel="noopener noreferrer"
              style={lightButton}
            >
              Prefer to talk first? Schedule a confidential call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

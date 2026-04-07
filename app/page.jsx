export default function Home() {
  const sectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  };

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
    padding: "28px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
  };

  const buttonPrimary = {
    display: "inline-block",
    background: "#111827",
    color: "#ffffff",
    padding: "14px 22px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 600,
    marginRight: "12px",
  };

  const buttonSecondary = {
    display: "inline-block",
    background: "#ffffff",
    color: "#111827",
    padding: "14px 22px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 600,
    border: "1px solid #d1d5db",
  };

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#111827", background: "#f8fafc" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#ffffff",
          padding: "80px 0 70px",
        }}
      >
        <div style={sectionStyle}>
          <div style={{ maxWidth: "760px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.12)",
                fontSize: "14px",
                marginBottom: "22px",
              }}
            >
              EmpoweredLO
            </div>

            <h1
              style={{
                fontSize: "52px",
                lineHeight: 1.1,
                margin: "0 0 20px",
                fontWeight: 700,
              }}
            >
              Empowering loan officers to grow, lead, and actually enjoy the ride.
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.88)",
                margin: "0 0 32px",
              }}
            >
              A recruiting platform for loan officers who want real support, stronger products, better execution, and a real path to building something bigger.
            </p>

            <div style={{ marginBottom: "34px" }}>
              <a href="#connect" style={buttonPrimary}>Schedule a private conversation</a>
              <a href="#why" style={buttonSecondary}>See what makes this different</a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "16px",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "18px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "6px" }}>More options</div>
                <div style={{ color: "rgba(255,255,255,0.8)" }}>Solve more borrower scenarios</div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "18px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "6px" }}>Real support</div>
                <div style={{ color: "rgba(255,255,255,0.8)" }}>Responsive people behind you</div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "18px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "6px" }}>Room to build</div>
                <div style={{ color: "rgba(255,255,255,0.8)" }}>For producers and future leaders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" style={{ padding: "70px 0" }}>
        <div style={sectionStyle}>
          <div style={{ maxWidth: "760px", marginBottom: "34px" }}>
            <div style={{ color: "#475569", fontWeight: 700, marginBottom: "12px", letterSpacing: "0.04em" }}>
              WHY EMPOWEREDLO
            </div>
            <h2 style={{ fontSize: "38px", lineHeight: 1.2, margin: "0 0 16px" }}>
              A better platform should help you win more often and with less friction.
            </h2>
            <p style={{ fontSize: "19px", lineHeight: 1.7, color: "#475569", margin: 0 }}>
              This is built for loan officers who care about their reputation, their client experience, and their long term growth.
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
              <h3 style={{ marginTop: 0, fontSize: "24px" }}>Built for growth</h3>
              <p style={{ color: "#475569", lineHeight: 1.7, marginBottom: 0 }}>
                A platform for loan officers who want more than a desk and a rate sheet. Get the support, products, and leadership access to grow with confidence.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, fontSize: "24px" }}>Support that shows up</h3>
              <p style={{ color: "#475569", lineHeight: 1.7, marginBottom: 0 }}>
                Real access to decision makers, responsive operations, and a team that understands what is at stake on every file and every relationship.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, fontSize: "24px" }}>More ways to win</h3>
              <p style={{ color: "#475569", lineHeight: 1.7, marginBottom: 0 }}>
                From traditional lending to strong non QM solutions, you gain more ways to compete, more ways to serve, and more confidence in the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 70px" }}>
        <div style={sectionStyle}>
          <div
            style={{
              ...cardStyle,
              background: "#111827",
              color: "#ffffff",
              border: "none",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "28px",
                alignItems: "start",
              }}
            >
              <div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontWeight: 700, marginBottom: "12px", letterSpacing: "0.04em" }}>
                  WHAT YOU GAIN
                </div>
                <h2 style={{ fontSize: "36px", lineHeight: 1.2, margin: "0 0 16px" }}>
                  The right move is bigger than compensation.
                </h2>
                <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.8, margin: 0 }}>
                  It is about support, speed, confidence, leadership, reputation, and the ability to build something meaningful without feeling like you are doing it alone.
                </p>
              </div>

              <div>
                <div style={{ marginBottom: "14px" }}>Leadership that helps you grow, not just report numbers</div>
                <div style={{ marginBottom: "14px" }}>Products that help you solve more client scenarios</div>
                <div style={{ marginBottom: "14px" }}>Operational support that protects your reputation</div>
                <div style={{ marginBottom: "14px" }}>A culture built around trust, accountability, and momentum</div>
                <div>A place where top producers can lead and enjoy the ride</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="connect" style={{ padding: "0 0 80px" }}>
        <div style={sectionStyle}>
          <div style={{ ...cardStyle, textAlign: "center" }}>
            <div style={{ color: "#475569", fontWeight: 700, marginBottom: "12px", letterSpacing: "0.04em" }}>
              CONFIDENTIAL CONVERSATION
            </div>

            <h2 style={{ fontSize: "38px", lineHeight: 1.2, margin: "0 0 16px" }}>
              Let’s talk about what you want next.
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
              Whether you want better execution, stronger products, more leadership support, or a real path to building a team, this starts with a conversation.
            </p>

            <a href="mailto:your@email.com" style={buttonPrimary}>
              Start the conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

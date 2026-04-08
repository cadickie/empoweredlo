export default function Home() {
  const section = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 24px",
  };

  const lightSection = {
    padding: "80px 0",
    background: "#f8fafc",
  };

  const darkSection = {
    padding: "80px 0",
    background: "#0f172a",
    color: "#ffffff",
  };

  const buttonPrimary = {
    display: "inline-block",
    background: "#ffffff",
    color: "#0f172a",
    padding: "14px 22px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 600,
  };

  const buttonSecondary = {
    display: "inline-block",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "#ffffff",
    padding: "14px 22px",
    borderRadius: "10px",
    textDecoration: "none",
  };

  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO */}
      <section style={darkSection}>
        <div style={section}>
          <h1 style={{ fontSize: "42px", lineHeight: 1.2, marginBottom: "16px" }}>
            If you’re producing but feel capped, it’s not you. It’s your platform.
          </h1>

          <p style={{ fontSize: "20px", lineHeight: 1.7, marginBottom: "12px", opacity: 0.9 }}>
            The right platform doesn’t just support you. It expands what you’re capable of.
          </p>
<p
  style={{
    fontSize: "20px",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.7)",
    marginTop: "18px", fontweight: 400,
  }}
>
  This is where the Empowered Loan Officer operates.
</p>
          <p style={{ fontSize: "18px", lineHeight: 1.7, marginBottom: "12px", opacity: 0.85 }}>
            If something feels in the way, it usually is. Guidelines, pricing, territory, support, or decision making.
          </p>

          <p style={{ fontSize: "18px", marginBottom: "24px", opacity: 0.85 }}>
            If that resonates, it’s worth a conversation.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://calendly.com/chrisdickie-changemortgage" target="_blank" style={buttonPrimary}>
              Schedule a growth strategy call
            </a>

            <a href="#pain" style={buttonSecondary}>
              See what this looks like in real life
            </a>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section id="pain" style={lightSection}>
        <div style={section}>
          <h2 style={{ fontSize: "30px", marginBottom: "24px" }}>
            If you’re even thinking about making a move, something is already off
          </h2>

          <div style={{ fontSize: "18px", lineHeight: 1.8, color: "#334155" }}>
            <p>You need help on a deal and your manager is not available.</p>

            <p>You are waiting on answers when time actually matters.</p>

            <p>You lose a deal you should have won.</p>

            <p>You start thinking you could be doing more somewhere else.</p>

            <p>That is not a production problem. That is a platform problem.</p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={lightSection}>
        <div style={section}>
          <h2 style={{ fontSize: "30px", marginBottom: "24px" }}>
            What this should feel like instead
          </h2>

          <div style={{ fontSize: "18px", lineHeight: 1.8, color: "#334155" }}>
            <p>When you need help, someone answers.</p>

            <p>When a deal gets complex, you have access to people who can actually make decisions.</p>

            <p>You are not fighting your platform. It is helping you win.</p>

            <p>That is what real support looks like.</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={lightSection}>
        <div style={section}>
          <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
            Why this is different
          </h2>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#334155", maxWidth: "700px" }}>
            This is not about chasing compensation. It is about having the right platform behind you when it matters most.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={lightSection}>
        <div style={{ ...section, display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          
          <div style={{ background: "#fff", padding: "20px", borderRadius: "12px" }}>
            <h3>Real autonomy</h3>
            <p>No micromanaging. Built for producers who do not need to be managed to perform.</p>
          </div>

          <div style={{ background: "#fff", padding: "20px", borderRadius: "12px" }}>
            <h3>Real support</h3>
            <p>When deals get complex, you have access to people who can actually help.</p>
          </div>

          <div style={{ background: "#fff", padding: "20px", borderRadius: "12px" }}>
            <h3>More ways to win</h3>
            <p>Better products and flexibility to structure deals others cannot.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={darkSection}>
        <div style={section}>
          <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
            Let’s talk about what you want to build next
          </h2>

          <p style={{ fontSize: "18px", marginBottom: "24px", opacity: 0.85 }}>
            If autonomy, growth, and a stronger platform matter to you, let’s talk.
          </p>

          <a href="https://calendly.com/chrisdickie-changemortgage" target="_blank" style={buttonPrimary}>
            Let's talk
          </a>
        </div>
      </section>

    </main>
  );
}

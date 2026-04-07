export default function LeaderPage() {
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

  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO */}
      <section style={darkSection}>
        <div style={section}>
          <h1 style={{ fontSize: "42px", lineHeight: 1.2, marginBottom: "16px" }}>
            If you’re producing and trying to build a team, you should not feel boxed in
          </h1>

          <p style={{ fontSize: "20px", lineHeight: 1.7, marginBottom: "12px", opacity: 0.9 }}>
            At a certain point, it’s no longer about your production. It’s about what you’re able to build.
          </p>

          <p style={{ fontSize: "18px", lineHeight: 1.7, marginBottom: "24px", opacity: 0.85 }}>
            If your platform is limiting that, it’s a problem worth solving.
          </p>

          <a href="https://calendly.com/chrisdickie-changemortgage" target="_blank" style={buttonPrimary}>
            Schedule a confidential conversation
          </a>
        </div>
      </section>

      {/* REALITY */}
      <section style={lightSection}>
        <div style={section}>
          <h2 style={{ fontSize: "30px", marginBottom: "24px" }}>
            Most platforms quietly limit strong leaders
          </h2>

          <div style={{ fontSize: "18px", lineHeight: 1.8, color: "#334155" }}>
            <p>You are told you can grow, but only within certain boundaries.</p>

            <p>You want to recruit, but you are not fully supported when it matters.</p>

            <p>You bring someone in, and operations does not deliver the experience you promised.</p>

            <p>Now your reputation is on the line.</p>

            <p style={{ marginTop: "16px", fontWeight: 600 }}>
              That is not a leadership problem. That is a platform problem.
            </p>
          </div>
        </div>
      </section>

      {/* SHIFT */}
      <section style={lightSection}>
        <div style={section}>
          <h2 style={{ fontSize: "30px", marginBottom: "24px" }}>
            What this should feel like instead
          </h2>

          <div style={{ fontSize: "18px", lineHeight: 1.8, color: "#334155" }}>
            <p>You are not restricted by geography or internal politics.</p>

            <p>You are able to bring in the right people and actually support them.</p>

            <p>Operations delivers in a way that reinforces your credibility, not undermines it.</p>

            <p>You are building something that grows beyond your personal production.</p>
          </div>
        </div>
      </section>

      {/* BUILD */}
      <section style={lightSection}>
        <div style={section}>
          <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
            Build something that lasts
          </h2>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#334155", maxWidth: "700px" }}>
            The right platform does not just help you close more loans. It gives you the ability to build a team, expand into new markets, and create something that continues to grow.
          </p>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#334155", maxWidth: "700px", marginTop: "12px" }}>
            That is where this starts to become a completely different opportunity.
          </p>
        </div>
      </section>

      {/* YOUR ROLE */}
      <section style={lightSection}>
        <div style={section}>
          <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
            My role in this
          </h2>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#334155", maxWidth: "700px" }}>
            I work with producing leaders who want to build something meaningful. My role is to help you do that without unnecessary friction, and to make sure you have the support, access, and flexibility to actually execute.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={darkSection}>
        <div style={section}>
          <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
            If this sounds like what you’ve been looking for, let’s talk
          </h2>

          <p style={{ fontSize: "18px", marginBottom: "24px", opacity: 0.85 }}>
            No pressure. Just a real conversation about what you want to build and whether this is the right platform for it.
          </p>

          <a href="https://calendly.com/chrisdickie-changemortgage" target="_blank" style={buttonPrimary}>
            Schedule time
          </a>
        </div>
      </section>

    </main>
  );
}

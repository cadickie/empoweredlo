export default function Home() {
  return (
    <main style={{ padding: "80px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome</h1>
      <p>Select what best describes you:</p>

      <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
        <a href="/producer">I’m a Producing LO</a>
        <a href="/leader">I’m Building a Team</a>
      </div>
    </main>
  );
}

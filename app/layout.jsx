export const metadata = {
  title: "EmpoweredLO",
  description: "EmpoweredLO website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

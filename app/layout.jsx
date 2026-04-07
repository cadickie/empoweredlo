export const metadata = {
  title: "EmpoweredLO",
  description: "Recruiting platform for loan officers"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

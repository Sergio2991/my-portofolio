import "./globals.css";

export const metadata = {
  title: "My Portofolio",
  description: "My Portofolio using Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

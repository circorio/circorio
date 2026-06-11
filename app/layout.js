import "./globals.css";

export const metadata = {
  title: "Circorio",
  description: "Dark art toys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
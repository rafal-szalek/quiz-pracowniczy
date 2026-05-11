
import "./globals.css";

export const metadata = {
  title: "Quiz pracowniczy",
  description: "Ankieta pracownicza z wynikiem osobowości",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}

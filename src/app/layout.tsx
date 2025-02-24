import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Cultura C",
  description: "Descubre los mejores eventos musicales en México",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <Navbar />
        <main className="container p-4 mx-auto">{children}</main>
      </body>
    </html>
  );
}

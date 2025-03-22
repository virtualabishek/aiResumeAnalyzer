import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Resume Analyzer",
  description: "AI-powered resume analysis and tracking system",
  keywords: ["resume", "analysis", "AI", "job tracking"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased min-h-screen`}>
        <Navbar />
        <main className="container mx-auto px-4 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

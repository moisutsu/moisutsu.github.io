import "@/styles/tailwind.css";
import "sanitize.css";

import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

export const metadata = {
  title: "Portfolio",
  description: "Jun Hirako's portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

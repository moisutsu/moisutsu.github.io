import "@/styles/tailwind.css";
import "sanitize.css";

import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

export const metadata = {
  title: "Jun Hirako",
  description: "Jun Hirako's portfolio",
  icons: {
    icon: "/moisutsu-icon.jpg",
    apple: "/moisutsu-icon.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-white text-stone-900 antialiased'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

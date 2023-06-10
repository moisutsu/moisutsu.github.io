export const metadata = {
  title: "Portfolio",
  description: "Jun Hirako's portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}

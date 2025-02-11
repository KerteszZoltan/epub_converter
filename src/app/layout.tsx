import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "../app/modules/common/styles/globals.scss";

const kanit = Kanit({
  weight:'400', 
  subsets:['latin']
});


export const metadata: Metadata = {
  title: "Convwme",
  description: "Convert yours epub files quickly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit}`}>
        {children}
      </body>
    </html>
  );
}

import { Noto_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";


//curser

import FlareCursor from "@/components/FlareCusror"; // Don't forget to update this path to your own component file.

//components
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: '400',
  display: 'swap'//By default 
});



export const metadata = {
  title: {
    default: " MK protoflio || موقع تعريفي ",//هذا عاد حق الصفحة الرئيسية
    template: "%s | MK"//هذا الجزء مخصص انه يطلع في كل مكان بس بمساعدة ال اس راح يتحسن عملية بحث الناس عن الموقع
  },
  description: "My combined education in MIS and passion for development empower me to build web applications with a strong foundation in data-driven decision making",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <NavBar />
        <FlareCursor />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

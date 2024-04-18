import { Montserrat,Tajawal } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight:'400',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: '400',
  display: 'swap'
});



export const metadata = {
  title: {
    default: " MK protoflio || موقع تعريفي عني",//هذا عاد حق الصفحة الرئيسية
    template: "%s | MK"//هذا الجزء مخصص انه يطلع في كل مكان بس بمساعدة ال اس راح يتحسن عملية بحث الناس عن الموقع
  },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}

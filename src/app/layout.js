import AnimatePresenceMotion from "@/components/UI/AnimatePresenceMotion";
import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/UI/NavBar";

const fontUsed = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "websitesbysagar - Sagar Vaish",
  description: "This is Sagar's portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AnimatePresenceMotion>
        <body
          style={{ WebkitTapHighlightColor: "transparent" }}
          className={fontUsed.className}
          // key={pathname}
        >
          <NavBar />
          {children}
        </body>
      </AnimatePresenceMotion>
    </html>
  );
}

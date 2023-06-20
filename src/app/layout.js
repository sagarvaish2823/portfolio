import AnimatePresenceMotion from "@/components/UI/AnimatePresenceMotion";
import "./globals.css";
import { Oswald } from "next/font/google";
import NavBar from "@/components/UI/NavBar";

const fontUsed = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Sagar Vaish",
  description: "This is Sagar's portfolio website.",
};

export default function RootLayout({ children, pathname }) {
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

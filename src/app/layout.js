import AnimatePresenceMotion from "@/components/UI/AnimatePresenceMotion";
import "./globals.css";
import { Roboto } from "next/font/google";
import NavBar from "@/components/UI/NavBar";
import { ThemeProvider } from "@/context/themeContext/themeContext";
import MouseComponent from "@/components/MouseComponent";

const fontUsed = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

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
        >
          <ThemeProvider>
            <MouseComponent />
            <div className="relative w-full">
              <NavBar />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </AnimatePresenceMotion>
    </html>
  );
}

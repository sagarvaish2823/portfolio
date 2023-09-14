import AnimatePresenceMotion from "@/components/Providers/AnimatePresenceMotion/AnimatePresenceMotion";
import "./globals.css";
import { Roboto } from "next/font/google";
import NavBar from "@/components/UI/NavBar";
import { ThemeProvider } from "@/context/themeContext/themeContext";
import MouseComponent from "@/components/UI/MouseComponent";
import MetaDataCustom from "@/components/Funtional/MetaDataCustom";
import Footer from "@/components/UI/Footer";
import { Providers } from "../components/Providers/Providers";

const fontUsed = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  // weight: ["300", "400", "500", "600", "700"], Quicksand
  // weight: ["400"], Gloock
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
          <Providers>
            <ThemeProvider>
              <MetaDataCustom />
              <MouseComponent />
              <div className="relative">
                <NavBar />
                {children}
                <Footer />
              </div>
            </ThemeProvider>
          </Providers>
        </body>
      </AnimatePresenceMotion>
    </html>
  );
}

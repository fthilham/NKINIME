import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300"],
});

export const metadata = {
  title: "NIKINIME",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} bg-primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import Navbar from "../components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhavesh's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-primary-black ${roboto.className}`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}

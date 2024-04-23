import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const merriWeather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata = {
  title: "Kitchen Kollective",
  description: "Created by Ralph Sormillon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriWeather.className}>
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

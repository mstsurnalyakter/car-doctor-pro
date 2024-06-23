import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/Services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Repairing workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
        <body className={inter.className}>
      <AuthProvider>
          <NavBar />
          <div className="min-h-[calc(100vh-345px)] mt-10 mb-20">
            {children}
          </div>
          <Footer />
      </AuthProvider>
        </body>
    </html>
  );
}

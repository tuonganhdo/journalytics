"use client";

import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import { HandleLoginStatus } from "@/utils/UserUtils";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function AppLayout({ children }) {
  HandleLoginStatus();
  
  return (
    <div className="w-screen pt-10 md:pt-0 md:pl-60">
      <NavBar/>
      {children}
    </div>
  );
}

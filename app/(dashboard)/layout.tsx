import Sidebar from "@/component/dashboard/layout/Sidebar";
import Topbar from "@/component/dashboard/layout/Topbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taletn Elevate",
  description: "This a job helping website us based",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <div className="flex h-screen w-full">
          {/* Sidebar - fixed width, always 240px */}
          <div className="w-[270px] min-w-[260px] max-w-[260px] h-full bg-white border-r border-gray-100 flex-shrink-0">
            <Sidebar />
          </div>
          {/* Main content area */}
          <div className="flex-1 flex flex-col h-full min-w-0">
            <Topbar />
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/components/AppSidebar";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kridha CMS",
  description: "CMS for AR menu app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1">
            {/* <SidebarTrigger/> */}
            <NextTopLoader
            color="oklch(0.208 0.042 265.755)"
            />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}

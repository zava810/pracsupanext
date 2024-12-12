//"use client";
import React, { useState } from 'react';
////binaryhoriontal115.woff2  hex115.woff2 binaryvertical115.woff2
import {
		hin115_font, ing115_font, bangla115_font, telugu115_font,
		mlyalm115_font, tmil115_font, kannada115_font, odia115_font,
		sinhala115_font, pnzabi115_font, guzrati115_font, binaryvertical115_font
} from '@/fonts';
import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  // https://stackoverflow.com/questions/72946973/how-to-access-a-state-of-an-component-from-another-component-in-next-js
  // const [f, setf] = useState(ing115_font.className);

  // const handlevaluechange = (selectedval: string) => {
  //   const getFontcn = (sval:string) => {
  //     switch (sval) {
  //       case '0': return ing115_font.className ;
  //       case '1': return hin115_font.className ;
  //       case '2': return bangla115_font.className ;
  //       case '3': return telugu115_font.className;
  //       case '4': return mlyalm115_font.className ;
  //       case '5': return tmil115_font.className ;      
  //       case '6': return kannada115_font.className ;
  //       case '7': return odia115_font.className ;
  //       case '8': return sinhala115_font.className ;
  //       case '9': return pnzabi115_font.className ;
  //       case 'L': return guzrati115_font.className ;
  //       case 'J': return binaryvertical115_font.className ;
  //       default: return ing115_font.className ;
  //     }
  //   }
  //   const selectedf = getFontcn(selectedval);
  //   setf(selectedf);
  // };
  return (
    <html lang="en" className={ing115_font.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"}>next.js supabase starter</Link>
                    <div className="flex items-center gap-2"> <DeployButton /> </div>
                    {/* <div>
                      <select onChange={(e) => handlevaluechange(e.target.value)}>
                        <option value="0">iNg115_font</option>
                        <option value="1">hin115_font</option>
                        <option value="2">bangla115_font</option>
                        <option value="3">telugu115_font</option>
                        <option value="4">mlyalm115_font</option>
                        <option value="5">tmil115_font</option>
                        <option value="6">kannada115_font</option>
                        <option value="7">odia115_font</option>
                        <option value="8">sinhala115_font</option>
                        <option value="9">pnzabi115_font</option>
                        <option value="L">guzrati115_font</option>
                        <option value="J">binaryvertical115_font</option>
                      </select>
                    </div> */}
                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <p>
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    supabase
                  </a>
                </p>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

'use client'
import "./globals.css";
import FixedBar from "@/components/ui/FixedBar";
import { ThemeProvider } from "@/components/theme-provider";
import {  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AppContext, useAppContext } from "./context/AppContext";
import { useEffect, useRef, useState } from "react";
import { useFetchProducts } from "@/hooks/useFetchProducts";

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
    <QueryClientProvider client={queryClient}>
      <AppContext>
        <html lang="en" suppressHydrationWarning>
          <body
            className={`scroll-smooth antialiased w-screen h-dvh max-h-dvh flex flex-col bg-zinc-100 dark:bg-neutral-900 dark:text-zinc-300`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem          
              disableTransitionOnChange          
            >        
              <div className="flex-1 overflow-y-scroll max-w-screen">
                {children}
              </div>              
              <FixedBar/>
            </ThemeProvider>
          </body>
        </html>
      </AppContext>
    </QueryClientProvider>
  );
}

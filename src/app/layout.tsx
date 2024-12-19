'use client'
import "./globals.css";
import FixedBar from "@/components/ui/FixedBar";
import { ThemeProvider } from "@/components/theme-provider";
import {  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AppContext } from "./context/AppContext";
import React, { useRef, useState } from "react";
import { RouterProvider } from "./context/RouterContext";

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutRef = useRef<HTMLDivElement | null>(null) 
  const [scroll,setScroll] = useState(0)
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) =>{    
    const target = e?.currentTarget    
    const scrollTop = target?.scrollTop

    setScroll(scrollTop)
  }

  return (    
    <QueryClientProvider client={queryClient}>
      <AppContext>
        <RouterProvider>
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
                <div onScroll={(e)=>handleScroll(e)} ref={layoutRef} className="flex-1 overflow-y-scroll max-w-screen">
                  {children}
                </div>              
                <FixedBar scroll={scroll}/>
              </ThemeProvider>
            </body>
          </html>
        </RouterProvider>
      </AppContext>
    </QueryClientProvider>
  );
}

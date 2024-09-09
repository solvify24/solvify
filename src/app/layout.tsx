import type { Metadata } from "next";
import { Montserrat as FontMontserrat } from "next/font/google";
import { cn } from "@/common/lib/utils";
import "@/common/styles/globals.css";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/common/stores/active-section";
import { ThemeProvider } from "@/common/theme/theme-provider";
import Header from "@/common/components/shared/header";
import Footer from "@/common/components/shared/footer";
import { ModeToggle } from "@/common/theme/mode-toggler";

export const metadata: Metadata = {
  title: "Solvify",
  description: "Welcome to our landing page.",
  icons: {
    icon: "/logo.svg", // /public path
  },
};

const fontMontserrat = FontMontserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "relative flex items-center justify-center",
          fontMontserrat.className
        )}
      >
        <div className="flex min-h-screen w-full flex-col">
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <div className="fixed z-[99] bottom-6 left-6 top-auto">
                <ModeToggle />
              </div>
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}

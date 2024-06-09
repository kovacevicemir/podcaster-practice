import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcasts using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <div className="relative flex flex-col">
          <main className="relative flex bg-black-3">
            <LeftSidebar />

            <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
              <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                <div className="flex h-16 items-center justify-between md:hidden">
                  <Image
                    width={30}
                    height={30}
                    alt="logo"
                    src="/icons/logo.svg"
                  />
                  <MobileNav />
                </div>
                <div className="flex flex-col md:pb-14">Toaster{children}</div>
              </div>
            </section>
            <RightSidebar />
          </main>
        </div>
      </body>
    </html>
  );
}

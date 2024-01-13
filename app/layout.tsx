import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Anushree Jaiswal (coderKrysio)",
    description:
        "This is the portfolio site of Anushree Jaiswal going with the name coderKrysio",
    keywords: [
        "coderKrysio",
        "Anushree Jaiswal",
        "frontend developer",
        "frontend developer in india",
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Suspense fallback={<Loading />}>{children}</Suspense>
            </body>
        </html>
    );
}

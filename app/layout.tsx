import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
            <body className={poppins.className}>
                <Suspense fallback={<Loading />}>{children}</Suspense>
            </body>
        </html>
    );
}

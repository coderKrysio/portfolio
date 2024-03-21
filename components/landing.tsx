"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Londrina_Outline, Poppins } from "next/font/google";
import Link from "next/link";
import { AttentionSeeker, Fade, Flip, Rotate } from "react-awesome-reveal";

const lodrina = Londrina_Outline({
    weight: ["400"],
    subsets: ["latin"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: "800",
});

export const Landing = () => {
    return (
        <section className={poppins.className}>
            <div className="flex w-screen h-screen landing--heading px-6">
                <div className="border-2 border-white w-full">
                    hi
                </div>

                <div className="relative w-full h-full flex flex-col justify-between items-end bg-transparent">
                    <Fade
                        delay={1300}
                        fraction={0}
                        duration={600}
                        triggerOnce
                        className="absolute top-[175px] right-[60px]"
                    >
                        <div
                            className={`text-end text-[216px] rotate-90 leading-[0.9] opacity-30 text-[#FBB95D] fill-white ${lodrina.className}`}
                        >
                            <span>
                                Anushree
                                <br />
                                Jaiswal
                            </span>
                        </div>
                    </Fade>

                    <div className="relative h-full flex gap-[10px]">
                        <div className="h-[190px] w-[50px]  flex justify-center items-center">
                            <Fade
                                cascade
                                damping={0.15}
                                triggerOnce
                                className="text-[24px] font-bold transform rotate-90 text-[#562151] whitespace-nowrap select-none"
                            >
                                コードクリシオ
                            </Fade>
                        </div>

                        <div className="h-[500px] w-[50px] flex justify-center items-center">
                            <Fade
                                cascade
                                damping={0.15}
                                triggerOnce
                                className="text-[40px] transform rotate-90 text-[#3F2021] whitespace-nowrap select-none"
                            >
                                アヌシュリー・ジャイワル
                            </Fade>
                        </div>

                        <div className="h-[600px] w-[50px] flex justify-center items-center">
                            <Fade
                                cascade
                                damping={0.15}
                                triggerOnce
                                className="text-[56px] transform rotate-90 text-[#D7713B] whitespace-nowrap opacity-75 select-none"
                            >
                                Frontend Developer
                            </Fade>
                        </div>
                    </div>

                    <div className="w-full h-[80px] flex justify-end items-center gap-[20px]">
                        <Fade
                            delay={2300}
                            direction="right"
                            cascade
                            triggerOnce
                        >
                            <Link
                                href={"https://github.com/coderKrysio/"}
                                target="_blank"
                            >
                                <Github
                                    width={"25px"}
                                    height={"25px"}
                                    color="#D7713B"
                                    className="hover:fill-[#D7713B] opacity-90"
                                />
                            </Link>

                            <Link
                                href={"https://linkedin.com/in/coderKrysio/"}
                                target="_blank"
                            >
                                <Linkedin
                                    width={"25px"}
                                    height={"25px"}
                                    color="#D7713B"
                                    className="hover:fill-[#D7713B] opacity-90"
                                />
                            </Link>

                            <Link
                                href={"https://twitter.com/coderKrysio"}
                                target="_blank"
                            >
                                <Twitter
                                    width={"25px"}
                                    height={"25px"}
                                    color="#D7713B"
                                    className="hover:fill-[#D7713B] opacity-90"
                                />
                            </Link>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

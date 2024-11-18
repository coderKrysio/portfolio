"use client";

import { Github, Linkedin, Twitter, Blend } from "lucide-react";
import { Londrina_Outline, Poppins } from "next/font/google";
import Image from "next/image";
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
        <section className={`relative bg-black z-0 ${poppins.className}`}>
            <img
                src={"/images/ai-3.jpg"}
                alt="background"
                className="absolute top-0 left-0 object-cover object-top w-screen h-full opacity-70 z-0"
            />
            <div className="relative flex w-screen h-screen landing--heading px-6 z-2">
                <div className="w-full h-full flex justify-center items-center relative">
                    <div className="absolute top-[80px] left-[80px] w-[200px] h-[200px] rounded-full bg-[#8E050F]/[0.8] outline-dashed outline-2 outline-[#DDD8CF] outline-offset-[-8px]"></div>
                    <div className="w-[400px] h-[400px] rounded-full outline outline-2 outline-[#DDD8CF] outline-offset-[-16px] bg-[#373737]/[0.6]"></div>
                    <Blend
                        width={220}
                        height={220}
                        color="#DDD8CF"
                        strokeWidth={0.1}
                        className="absolute bottom-[40px] right-[90px]"
                    />
                </div>

                <div className="relative w-full h-full flex flex-col justify-between items-end bg-transparent">
                    <div className="relative h-full flex gap-[10px] mr-[230px]">
                        <div className="h-[190px] w-[50px] flex justify-center">
                            <Fade
                                cascade
                                damping={0.02}
                                triggerOnce
                                className="text-[24px] font-bold text-[#AD886F] whitespace-nowrap select-none"
                            >
                                <p className="flex flex-col leading-9">
                                    {"コ ー ド ク リ シ オ"
                                        .split(" ")
                                        .map((ch) => (
                                            <span>{ch}</span>
                                        ))}
                                </p>
                            </Fade>
                        </div>

                        <div className="h-[500px] w-[50px] flex justify-center">
                            <Fade
                                triggerOnce
                                className="text-[40px] text-[#3A5D79] whitespace-nowrap select-none"
                            >
                                <p className="flex flex-col leading-9">
                                    {"ア ヌ シ ュ リ ー ・ ジ ャ イ ワ ル"
                                        .split(" ")
                                        .map((ch) => (
                                            <span>{ch}</span>
                                        ))}
                                </p>
                            </Fade>
                        </div>

                        <div className="h-[600px] w-[50px] flex justify-center items-center">
                            <Fade
                                cascade
                                damping={0.02}
                                triggerOnce
                                className="text-[56px] transform rotate-90 text-[#FBB95D] whitespace-nowrap select-none "
                            >
                                Full Stack Developer
                            </Fade>
                        </div>
                    </div>
                    <Fade
                        fraction={0}
                        duration={600}
                        triggerOnce
                        className="absolute top-[210px] mr-[-210px]"
                    >
                        <div
                            className={`text-[126px] rotate-90 leading-[0.9] text-[#FFE9CA] fill-white`}
                        >
                            <span>
                                Anushree
                                <br />
                                Jaiswal
                            </span>
                        </div>
                    </Fade>

                    {/* <div className="w-full h-[80px] flex justify-end items-end gap-[20px]">
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
                                    color="#fffad1"
                                    className="hover:fill-[#D7713B]"
                                />
                            </Link>

                            <Link
                                href={"https://linkedin.com/in/coderKrysio/"}
                                target="_blank"
                            >
                                <Linkedin
                                    width={"25px"}
                                    height={"25px"}
                                    color="#fffad1"
                                    className="hover:fill-[#D7713B]"
                                />
                            </Link>

                            <Link
                                href={"https://twitter.com/coderKrysio"}
                                target="_blank"
                            >
                                <Twitter
                                    width={"25px"}
                                    height={"25px"}
                                    color="#fffad1"
                                    className="hover:fill-[#D7713B]"
                                />
                            </Link>
                        </Fade>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

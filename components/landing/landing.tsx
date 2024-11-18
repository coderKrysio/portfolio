"use client";

import { Fade } from "react-awesome-reveal";
import { IntroCircles } from "./intro-circles";
import { HorizontalWriting } from "./horizontal-writing";
import { DropBlob } from "./drop-blob";

export const Landing = () => {
    return (
        <section className="relative z-0 select-none">
            <img
                src={"/images/ai-3.jpg"}
                alt="background"
                className="absolute top-0 left-0 object-cover object-top w-screen h-full opacity-70 z-0"
            />
            <div className="relative flex w-screen h-screen landing--heading px-6 z-2">
                <IntroCircles />

                <div className="relative w-full h-full flex flex-col justify-between items-end">
                    <HorizontalWriting />
                    <Fade
                        fraction={0}
                        duration={600}
                        triggerOnce
                        className="absolute top-[250px] mr-[-270px]"
                    >
                        <div
                            className={`text-[156px] rotate-90 leading-[0.9] text-[#FFE9CA] fill-white font-bold`}
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
            <DropBlob />
        </section>
    );
};

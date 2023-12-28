"use client";
import {
    Github,
    Instagram,
    Linkedin,
    Mail,
    Squircle,
    Twitter,
} from "lucide-react";
import Link from "next/link";
import { Fade, Roll, Slide } from "react-awesome-reveal";

export const ContactMe = () => {
    return (
        <section id="contact-me" className="w-full min-h-screen flex flex-col mt-[60px]">
            <div className="relative ml-[30px] flex h-screen">
                <Fade
                    big
                    className="absolute top-[450px] left-[100px] rotate-90"
                >
                    <div className="text-7xl font-bold text-[#D7713B]">
                        Contact
                        <br />
                        Me
                    </div>
                </Fade>

                <Roll
                    className="absolute top-[170px] left-[220px] z-[1]"
                >
                    <Squircle
                        width={"200px"}
                        height={"200px"}
                        strokeWidth={0.7}
                        color="#FB8987"
                        className="rotate-[30deg]"
                    />
                </Roll>

                <Fade className="relative" cascade damping={0.3}>
                    <div className="absolute top-0 left-0 w-[300px] h-[350px] flex items-center overflow-hidden rounded-lg">
                        <img
                            src="/images/box-1.jpg"
                            className="w-full bg-cover"
                        />
                    </div>

                    <div className="absolute top-0 left-[330px] w-[550px] h-[250px] flex items-center overflow-hidden rounded-lg">
                        <img
                            src="/images/box-2.jpg"
                            className="w-full bg-cover"
                        />
                    </div>

                    <div className="absolute top-[280px] left-[330px] w-[300px] h-[380px] flex items-center overflow-hidden rounded-lg">
                        <img
                            src="/images/box-3.jpg"
                            className="h-full bg-cover"
                        />
                    </div>

                    <div className="absolute top-[280px] left-[660px] w-[350px] h-[300px] flex items-center overflow-hidden rounded-lg">
                        <img
                            src="/images/box-4.jpg"
                            className="w-full bg-cover"
                        />
                    </div>
                </Fade>

                <div className="absolute right-[90px] top-[50%] transform translate-y-[-50%] px-[20px]">
                    <Fade direction="right">
                    <div className="absolute top-[100px] left-[-130px] text-6xl flex flex-col gap-[30px] font-semibold text-[#562151]">
                        私<br/>
                    に<br/>連<br/>絡<br/>し<br/>て</div>
                    </Fade>

                    <Slide
                        cascade
                        direction="right"
                        damping={0.15}
                        className="flex flex-col items-center justify-center"
                    >
                        <Link href={"/"}>
                            <Linkedin
                                width={"50px"}
                                height={"50px"}
                                color="#FBB95D"
                                strokeWidth={0.8}
                                className="hover:fill-[#FBB95D] mb-[25px]"
                            />
                        </Link>

                        <Link href={"/"}>
                            <Github
                                width={"50px"}
                                height={"50px"}
                                color="#FBB95D"
                                strokeWidth={0.8}
                                className="hover:fill-[#FBB95D] mb-[25px]"
                            />
                        </Link>

                        <Link href={"/"}>
                            <Twitter
                                width={"50px"}
                                height={"50px"}
                                color="#FBB95D"
                                strokeWidth={0.8}
                                className="hover:fill-[#FBB95D] mb-[25px]"
                            />
                        </Link>

                        <Link href={"/"}>
                            <Instagram
                                width={"50px"}
                                height={"50px"}
                                color="#FBB95D"
                                strokeWidth={0.8}
                                className="hover:fill-[#FBB95D] mb-[25px] hover:stroke-black"
                            />
                        </Link>

                        <Link href={"/"}>
                            <Mail
                                width={"50px"}
                                height={"50px"}
                                color="#FBB95D"
                                strokeWidth={0.8}
                                className="hover:fill-[#FBB95D] mb-[25px] hover:stroke-black"
                            />
                        </Link>
                    </Slide>
                </div>
            </div>

            <div className="h-[100px] w-full text-center select-none text-[#D7713B] font-medium flex flex-col justify-center items-center">
                coderkrysio.vercel.app
                <span>© All rights reversed 2023</span>
            </div>
        </section>
    );
};

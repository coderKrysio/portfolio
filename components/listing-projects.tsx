"use client";
import { projectsData } from "@/lib/data";
import { Chrome, CircleDashed, Github } from "lucide-react";
import { Kanit } from "next/font/google";
import Link from "next/link";
import {
    AttentionSeeker,
    Fade,
    JackInTheBox,
    Slide,
} from "react-awesome-reveal";

const kanit = Kanit({
    weight: ["300", "400", "500"],
    subsets: ["latin"],
});

export const ListingProjects = () => {
    return (
        <section className="w-full min-h-screen relative flex flex-col justify-center items-center mt-[200px] px-[60px] gap-[70px]">
            {projectsData.map(
                (
                    {
                        name,
                        number,
                        description,
                        nameinjapansese,
                        title,
                        bannerImg,
                        liveLink,
                        githubLink,
                    },
                    index
                ) => (
                    <div
                        className="h-screen pt-[80px] relative flex flex-col justify-between mb-[60px] select-none"
                        key={index}
                    >
                        <Slide direction="right" className="absolute right-0 top-[45px] z-[1]">
                            <span className="font-semibold py-4 text-3xl opacity-40 text-[#FB8987]">
                                {nameinjapansese}
                            </span>
                            </Slide>

                        <div className="relative flex items-center justify-between gap-[150px] h-auto">
                            <Fade
                                duration={600}
                                delay={500}
                                className={`max-w-[350px] h-full text-lg flex px-3 ${kanit.className}`}
                            >
                                {description}
                            </Fade>

                            <Slide
                                direction="left"
                                className="absolute left-[457px] z-[1]"
                            >
                                <div className="text-7xl font-extrabold rotate-90 opacity-90 text-[#D7713B]">
                                    {number}
                                </div>
                            </Slide>

                            <JackInTheBox>
                                <div className="w-full h-auto opacity-95 rounded-xl overflow-hidden">
                                    <img src={bannerImg} className="w-full" />
                                </div>
                            </JackInTheBox>

                            <div className="absolute bottom-[-17.5px] right-[25px] z-[1] flex justify-center items-center gap-4">
                            <Slide
                                direction="right"
                                delay={600}
                                duration={400}
                                className="w-fit"
                                cascade
                            >
                                <Link href={githubLink}>
                                    <Github
                                        width={"35px"}
                                        height={"35px"}
                                        strokeWidth={2}
                                        className="hover:fill-[#D7713B] transition-colors"
                                        color="#FBB95D"
                                    />
                                </Link>

                                <Link href={liveLink}>
                                    <Chrome
                                        width={"35px"}
                                        height={"35px"}
                                        strokeWidth={2}
                                        className="hover:fill-[#D7713B] transition-colors"
                                        color="#FBB95D"
                                    />
                                </Link>
                            </Slide>
                            </div>
                        </div>

                        <div
                            className={`pl-[350px] py-5 h-full relative text-6xl font-semibold tracking-wide flex flex-col ${kanit.className}`}
                        >
                            <Fade className="absolute left-[-100px] top-[-50px] opacity-70">
                                <CircleDashed
                                    width={"200px"}
                                    height={"200px"}
                                    strokeWidth={0.5}
                                    color="#D7713B"
                                />
                            </Fade>
                            <AttentionSeeker
                                cascade
                                effect="flash"
                                duration={600}
                                damping={0.15}
                                className="text-[#FFE9CA]"
                            >
                                {name}
                            </AttentionSeeker>
                            <Fade duration={300} delay={600}>
                                <span className="opacity-90 text-3xl py-5 text-[#7C2629]">
                                    コードクリシオ製
                                </span>
                            </Fade>

                            <Slide
                                direction="right"
                                duration={500}
                                delay={400}
                                className="absolute bottom-0 right-0 text-2xl text-right font-extrabold text-[#562151]"
                            >
                                <span>これは<br/>{title}</span>
                            </Slide>
                        </div>
                    </div>
                )
            )}
        </section>
    );
};

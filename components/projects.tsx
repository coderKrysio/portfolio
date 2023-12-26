"use client";
import {
    Bean,
    Bird,
    Citrus,
    CookieIcon,
    CookingPot,
    Croissant,
    Diamond,
    Donut,
    Egg,
    FishSymbol,
    Grape,
    Loader2,
    Moon,
    Popsicle,
    RectangleVerticalIcon,
    Salad,
    Shell,
    Snail,
    Squircle,
    Torus,
    Triangle,
} from "lucide-react";
import { Kanit } from "next/font/google";
import { AttentionSeeker, Fade, Flip, Slide, Zoom } from "react-awesome-reveal";

const kanit = Kanit({
    weight: ["300", "400", "500"],
    subsets: ["latin"],
});

export const Projects = () => {
    return (
        <section className="w-full min-h-screen relative flex justify-center items-center mt-[350px] px-[60px] gap-[90px]">
            <Slide direction="right" className="w-full" duration={1500}>
                <div className="polygon" />
            </Slide>

            <div className="absolute left-[50px] top-[-40%] ml-[25px] flex flex-col justify-between gap-[30px] opacity-70">
                <AttentionSeeker effect="heartBeat" cascade damping={0.2}>
                    <Shell
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <Grape
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <Bean
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <CookieIcon
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <Croissant
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <Donut
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <Citrus
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <Egg
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <FishSymbol
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                        className="-rotate-90"
                    />
                    <Snail
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <Bird
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <Popsicle
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <Torus
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <CookingPot
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                    <Salad
                        width={"50px"}
                        height={"50px"}
                        strokeWidth={1}
                        color="#FFE9CA"
                    />
                </AttentionSeeker>
            </div>

            <Fade
                cascade
                className="absolute w-[600px] h-full flex justify-start items-start z-[1]"
            >
                <RectangleVerticalIcon
                    width={"200px"}
                    height={"200px"}
                    strokeWidth={1}
                    color="#7C2629"
                    className="opacity-40 absolute top-[10px] left-[-40px] rotate-[-20deg]"
                />
                <Moon
                    width={"200px"}
                    height={"200px"}
                    strokeWidth={1}
                    color="#7C2629"
                    className="opacity-40 absolute top-[145px] left-[20px] rotate-[-10deg]"
                />
                <Squircle
                    width={"200px"}
                    height={"200px"}
                    strokeWidth={1}
                    color="#7C2629"
                    className="opacity-40 absolute top-[270px] left-[90px] rotate-[-80deg]"
                />
                <Triangle
                    width={"200px"}
                    height={"200px"}
                    strokeWidth={1}
                    color="#7C2629"
                    className="opacity-40 absolute bottom-[130px] left-[225px] rotate-[80deg]"
                />
                <Diamond
                    width={"200px"}
                    height={"200px"}
                    strokeWidth={1}
                    color="#7C2629"
                    className="opacity-40 absolute bottom-[70px] right-[75px] rotate-[30deg]"
                />
                <Loader2
                    width={"200px"}
                    height={"200px"}
                    strokeWidth={1}
                    color="#7C2629"
                    className="opacity-40 absolute bottom-0 right-[-50px] rotate-[-20deg]"
                />
            </Fade>

            <div className={`absolute left-[200px] w-[450px] text-3xl text-[#FFE9CA] font-medium z-[1] select-none ${kanit.className}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit laborum, placeat sunt totam praesentium aperiam eius beatae aspernatur. Beatae debitis voluptatum quis rerum qui iusto voluptas soluta tempore. Fugiat, alias.
            </div>

            <div className="relative flex items-center justify-end w-fit">
                <Flip
                    direction="vertical"
                    className="absolute left-[-30px] z-[1] h-[600px] w-[70px]"
                >
                    <p
                        className={`rotate-90 select-none font-semibold text-9xl text-[#FBB95D] ${kanit.className}`}
                    >
                        Projects
                    </p>
                </Flip>
                <Slide direction="right" duration={500}>
                    <div className="w-[400px] h-full">
                        <img
                            src="/images/model-img1.jpg"
                            className="w-full h-auto bg-cover bg-center bg-no-repeat"
                        />
                    </div>
                </Slide>
            </div>
        </section>
    );
};

"use client";
import { Circle, Square } from "lucide-react";
import { AttentionSeeker, Fade, Rotate } from "react-awesome-reveal";
import { Kanit } from "next/font/google";

const kanit = Kanit({
    weight: ["300", "400", "500"],
    subsets: ["latin"],
});

export const AboutMe = () => {
    return (
        <section className="w-full min-h-screen flex flex-col mt-[60px]">
            <div className="h-[280px] relative flex items-end justify-center">
                <AttentionSeeker effect="flash" duration={300}>
                    <Square
                        width={"350px"}
                        height={"350px"}
                        strokeWidth={0.5}
                        className="absolute top-[-80px] left-[-80px] opacity-10"
                    />
                    <span className="absolute top-0 left-0 w-[220px] h-[220px] text-right font-semibold flex items-center justify-center p-3 opacity-25 select-none">
                        自分も欲しいだろう
                        <br />
                        ベイビー、信じてください
                    </span>
                </AttentionSeeker>

                <div
                    className={`w-[750px] h-[240px] text-7xl text-[#7C2629] font-bold opacity-80 tracking-wide flex flex-col justify-end items-start gap-2 select-none`}
                >
                    <AttentionSeeker effect="flash" cascade duration={800}>
                        こんにちは
                    </AttentionSeeker>
                    <span className="text-2xl">Kon'nichiwa</span>
                </div>
            </div>

            <div className="relative w-screen flex flex-col items-center justify-center">
                <Rotate
                    direction="bottom-right"
                    className="absolute top-0 right-[100px]"
                >
                    <div className="transform rotate-90 text-7xl text-[#FBB95D] font-bold whitespace-nowrap select-none">
                        About me
                    </div>
                </Rotate>

                <Circle
                    width={"150px"}
                    height={"150px"}
                    strokeWidth={2}
                    className="absolute right-[300px] top-[-55px] z-[1]7"
                    color="#FFE9CA"
                />

                <Fade cascade duration={700}>
                    <div className="w-[900px] h-[500px] m-5 top--box opacity-60" />
                    <div className="w-[750px] h-[400px] relative left-[75px] bottom--box opacity-60" />
                </Fade>

                <div
                    className={`absolute left-[50px] text-3xl max-w-[410px] select-none ${kanit.className}`}
                >
                    <Fade duration={800}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ut est ipsum odit voluptatem facilis repellendus
                        quae, quam quis iure quidem, quod culpa ducimus ipsam
                        quas libero obcaecati doloribus dolore dolorum. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem voluptatibus dolor nihil dolorum numquam
                        provident! Nesciunt, aspernatur consectetur deserunt
                        optio, recusandae eveniet eaque nihil voluptas minus
                        perspiciatis officia, reprehenderit voluptatibus.
                    </Fade>
                </div>

                <AttentionSeeker effect="flash" duration={300}>
                    <Square
                        width={"350px"}
                        height={"350px"}
                        strokeWidth={0.5}
                        className="absolute right-[-80px] bottom-[-80px] opacity-10"
                    />
                    <span className="absolute bottom-0 right-0 w-[220px] h-[220px] text-left font-semibold flex items-center justify-center p-3 opacity-25 select-none">
                        地獄に通してやる
                        <br />
                        ただ私を知るために、ええ、ええ
                    </span>
                </AttentionSeeker>
            </div>
        </section>
    );
};

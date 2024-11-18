"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

export const HorizontalWriting = () => {
    return (
        <div className="relative h-full flex gap-[10px] mr-[270px]">
            <div className="h-[190px] w-[50px] flex justify-center">
                <Fade
                    cascade
                    damping={0.02}
                    triggerOnce
                    className="text-[24px] font-bold text-[#95BF96] whitespace-nowrap"
                >
                    <p className="flex flex-col leading-9">
                        {"フ ル ス タ ッ ク 開 発 者".split(" ").map((ch) => (
                            <span key={ch}>{ch}</span>
                        ))}
                    </p>
                </Fade>
            </div>

            <div className="h-[500px] w-[50px] flex justify-center">
                <Fade
                    triggerOnce
                    className="text-[40px] font-bold text-[#95BF96] whitespace-nowrap"
                >
                    <p className="flex flex-col leading-9">
                        {"ア ヌ シ ュ リ ー ・ ジ ャ イ ワ ル"
                            .split(" ")
                            .map((ch) => (
                                <span key={ch}>{ch}</span>
                            ))}
                    </p>
                </Fade>
            </div>

            <div className="h-[590px] w-[50px] flex justify-center items-center">
                <Fade
                    cascade
                    damping={0.02}
                    triggerOnce
                    className="text-[56px] font-bold transform rotate-90 text-[#FBB95D] whitespace-nowrap "
                >
                    Full Stack Developer
                </Fade>
            </div>
        </div>
    );
};

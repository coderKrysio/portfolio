"use client";
import {
    ChevronLeft,
    ChevronRight,
    Code2,
    Home,
    LampCeiling,
    Library,
    UserRoundSearch,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export const NavigationBar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className="flex flex-col justify-center items-center gap-2 fixed left-0 bottom-0 p-2 m-2 rounded-xl z-[10] bg-black">
            {!showNav ? (
                <Fade>
                    <ChevronRight
                        width={20}
                        height={20}
                        strokeWidth={3}
                        color="#FBB95D"
                        className="hover:cursor-pointer"
                        onClick={() => setShowNav(true)}
                    />
                </Fade>
            ) : (
                <>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Fade cascade direction="left" damping={0.1} className="w-fit">
                            <Link href="/">
                                <LampCeiling
                                    width={20}
                                    height={20}
                                    strokeWidth={2}
                                    color="#FBB95D"
                                />
                            </Link>
                            <Link href="/#about-me">
                                <Library
                                    width={20}
                                    height={20}
                                    strokeWidth={2.5}
                                    color="#FBB95D"
                                    className=""
                                />
                            </Link>
                            <Link href="/#projects">
                                <Code2
                                    width={20}
                                    height={20}
                                    strokeWidth={2.5}
                                    color="#FBB95D"
                                />
                            </Link>
                            <Link href="/#contact-me">
                                <UserRoundSearch
                                    width={20}
                                    height={20}
                                    strokeWidth={2.5}
                                    color="#FBB95D"
                                />
                            </Link>
                        </Fade>
                    </div>
                    <Fade>
                        <ChevronLeft
                            width={20}
                            height={20}
                            strokeWidth={3}
                            color="#FBB95D"
                            className="hover:cursor-pointer"
                            onClick={() => setShowNav(false)}
                        />
                    </Fade>
                </>
            )}
        </div>
    );
};

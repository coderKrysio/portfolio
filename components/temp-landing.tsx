import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const TempLanding = () => {
    return (
        <main
            className={`h-full w-full relative flex items-center justify-between bg-[#527853] rounded-xl gap-5 p-16 max-[780px]:p-8 max-[580px]:p-4 ${poppins.className}`}
        >
            <div className="absolute right-0 top-0 p-3 flex items-center gap-3">
                <Link
                    href={"https://github.com/coderKrysio"}
                    target="_blank"
                    className="flex items-center justify-center"
                >
                    <img
                        width="21"
                        height="21"
                        src="https://img.icons8.com/ios-filled/F9E8D9/50/github.png"
                        alt="github"
                    />
                </Link>
                <Link
                    href={"https://www.linkedin.com/in/coderkrysio"}
                    target="_blank"
                >
                    <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/glyph-neue/f9e8d9/64/linkedin-circled.png"
                        alt="linkedin"
                    />
                </Link>
                <Link
                    href={"https://twitter.com/coderKrysio"}
                    target="_blank"
                    className="flex items-center justify-center"
                >
                    <img
                        width="21"
                        height="21"
                        src="https://img.icons8.com/ios-filled/f9e8d9/50/twitterx--v2.png"
                        alt="twitter-x"
                    />
                </Link>
            </div>
            <div className="w-full h-full flex flex-col justify-center gap-6">
                <div className="text-2xl font-bold max-[780px]:text-xl">
                    Hi there, I'm
                    <br />
                    <span className="text-8xl font-extrabold max-[780px]:text-6xl max-[580px]:text-4xl">
                        coderKrysio
                    </span>
                </div>
                <div className="text-4xl font-bold max-[780px]:text-3xl max-[580px]:text-2xl">
                    a frontend developer{" "}
                    <span className="text-xl font-bold max-[580px]:text-lg">
                        based in India
                    </span>
                </div>
                <div className="font-bold leading-relaxed">* coming soon *</div>
            </div>
            {/* <div className="w-full h-full flex flex-col justify-center px-16">
                <div className="rotate-[-14deg] poster-box w-[300px] h-[300px] p-8 flex flex-col gap-3">
                    <div className="bg-[#527853] rounded-xl w-full h-full p-4 flex flex-col">
                        <div className="text-2xl font-bold">Works</div>
                        {[
                            "GeneKriti",
                            "Elenco",
                            "Get Interval",
                            "",
                            "",
                            "",
                        ].map((skills, id) => (
                            <div key={id} className="text-lg font-medium">
                                · {skills}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rotate-[14deg] poster-box w-[300px] h-[300px] p-8 flex flex-col gap-3 self-end">
                    <div className="bg-[#527853] rounded-xl w-full h-full p-4 flex flex-col">
                        <div className="text-2xl font-bold">Skills</div>
                        {[
                            "SAAS",
                            "NextJS",
                            "Tailwind CSS",
                            "ReactJS",
                            "JavaScript",
                            "TypeScript",
                        ].map((skills, id) => (
                            <div key={id} className="text-lg font-medium">
                                · {skills}
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </main>
    );
};

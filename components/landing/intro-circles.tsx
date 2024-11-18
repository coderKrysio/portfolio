import { Blend } from "lucide-react";
import React from "react";

export const IntroCircles = () => {
    return (
        <div className="w-full h-full flex justify-center items-center relative">
            <div className="absolute top-[80px] left-[80px] w-[200px] h-[200px] rounded-full bg-[#8E050F]/[0.8] outline-dashed outline-2 outline-[#DDD8CF] outline-offset-[-8px] text-[#ddd8cf] flex flex-col items-center justify-center gap-2">
                <p className="text-5xl font-bold">Hey,</p>
                <p className="text-4xl font-semibold text-[#F59A36]">おい</p>
            </div>
            <div className="w-[400px] h-[400px] rounded-full outline outline-2 outline-[#DDD8CF] outline-offset-[-16px] bg-[#373737]/[0.6] text-[#ddd8cf] flex flex-col justify-center gap-4 text-left pl-[86px]">
                <p className="text-xl opacity-95">
                    10月26日生まれ <br />
                    2年以上の経験がある方
                </p>
                <p className="text-5xl text-[#FBB95D] font-semibold">
                    coderkrysio
                </p>
                <p className="text-xl -my-3 text-[#FBB95D] font-semibold">
                    here, a.k.a.
                </p>
                <p className="text-2xl opacity-95">
                    ここのコーデクリシオ、
                    <br /> 内向的な開発者
                </p>
            </div>
            <Blend
                width={220}
                height={220}
                color="#DDD8CF"
                strokeWidth={0.1}
                className="absolute bottom-[40px] right-[90px]"
            />
            <p></p>
        </div>
    );
};

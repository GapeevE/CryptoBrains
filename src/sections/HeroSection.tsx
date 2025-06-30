import Button from "../components/Button";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useMemo } from "react";

export default function HeroSection() {
    const hrItems = useMemo(() => 
        Array.from({ length: 48 }, (_, i) => (
            <div key={`hrItem_${i}`} className="min-w-1 md:min-w-2 bg-[#131517] h-1" />
        )), 
    []);

    return <>
        <div className="flex relative flex-wrap">
            <img
                alt="desktop image"
                width={600}
                height={487}
                loading="lazy"
                src={'/desktop.png'}
                className="static mx-auto lg:absolute top-0 right-0 drop-shadow-custom"
            />
        </div>
        <div className="flex flex-col w-full lg:w-2/3 items-center lg:items-start">
            <cite className="flex flex-row flex-nowrap items-center gap-2 mb-7 lg:mb-8 mt-9">
            <span className="w-10 border border-[#1B70F1]"></span>
            <p className="font-semibold text-xl md:text-2xl text-[#1B70F1]">Crypto Brains</p>
            </cite>
            <blockquote>
                <h1 className="font-bold text-4xl md:text-5xl lg:text-8xl text-center lg:text-start text-white">Buy & Sell Crypto Easy With Crypto Brains</h1>
            </blockquote>
            <div className="flex flex-row flex-nowrap bg-gradient-to-r gap-2 from-[#9AC3211A] via-[#9AC321CC] to-[#9AC3211A] w-full max-w-[543px] my-4 mx-auto overflow-hidden">
                { hrItems }
            </div>
            <p className="text-[#ADB3BF] text-lg font-normal text-center lg:text-start md:text-xl w-4/5 mt-5 lg:mt-6">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <div className="flex flex-row w-full flex-wrap justify-start items-start gap-4 lg:gap-6 mt-6 sm:mt-16">
            <Button color='blue' href='/blue/trade' className='w-full sm:w-fit sm:min-w-[200px]'>
                Start Now
                <ArrowUpRightIcon className="w-5" />
            </Button>
            <Button color='white' href='/blue/begginers-gid' className='w-full sm:w-fit sm:min-w-[200px]'>
                Beginner’s Guide
            </Button>
            </div>
        </div>
    </>
}
import Button from "../components/Button";
import { startTradingCards } from "../lib/startTradingCards";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function StartTradingSection() {
    return <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-7 text-center">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white">Start Trading In Simple Process</h2>
            <p className="text-[#ADB3BF] text-lg font-normal">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
        <hr className="w-full border-none rounded-sm h-1 bg-gradient-to-r from-[#FFFFFF0A] via-[#FFFFFF33] to-[#FFFFFF0A] my-8" />
        <div className="flex flex-row justify-center md:justify-between items-center md:items-start flex-wrap gap-10">
        {startTradingCards.map((card) => {
            const LinkIcon = card.icon;
            return(
            <div key={card.id} className="flex flex-col items-center rounded-xl shadow-lg/30 hover:scale-105 hover:shadow-white/70 hover:ring-2 hover:ring-white bg-[#272A34] py-14 px-7 gap-10">
                <div className={`flex justify-center items-center w-16 h-16 ${card.color} rounded-full`}>
                <LinkIcon className="w-9 fill-white" />
                </div>
                <h6 className="font-semibold text-2xl text-white text-center">{card.header}</h6>
                <p className="text-[#ADB3BF] font-normal text-base text-center max-w-[278px]">{card.content}</p>
                <Button href={card.href} color='none'>
                {card.button}
                <ArrowUpRightIcon className="w-5" />
                </Button>
            </div>
            )
        })}
        </div>
    </div>
}
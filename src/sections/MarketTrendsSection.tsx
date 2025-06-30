import { cardCoinTypes } from "../lib/cardCoinTypes"
import { useMemo } from "react";
import Wrapper from "../blocks/Wrapper";
import Button from "../components/Button";
import SkeletonCard from "../skeletons/SkeletonCard";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Card from "../components/Card";
import type { CryptoData } from "../lib/cryptoData";

export default function MarketTrendsSection({cardLoading, cardData, filterValue, setFilterValue} : {cardLoading: boolean, cardData: CryptoData[], filterValue: string, setFilterValue: React.Dispatch<React.SetStateAction<string>>}) {
    const btns = useMemo(() => 
        cardCoinTypes.map(btn => (
            <button 
            key={btn.id}
            className={`bg-transparent border-b-2 whitespace-nowrap cursor-pointer hover:text-[#1B70F1] hover:border-b-[#1B70F1] transition-colors duration-500 ease-in-out
                ${filterValue === btn.filter 
                    ? "text-[#1B70F1] border-b-[#1B70F1]" 
                    : "border-b-transparent text-[#ADB3BF]"
                }`
            }
            onClick={() => setFilterValue(btn.filter)}
            >
            {btn.name}
            </button>
        )), 
    [filterValue]);

    return <div className="flex flex-row flex-wrap items-center justify-between">
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white w-full lg:w-fit text-center">Market Trends</h2>
        <div className="flex flex-row gap-7 py-7 items-end overflow-x-auto w-full lg:w-fit justify-start wrapper">
          { btns }
        </div>
        <hr className="w-full border-none rounded-sm h-1 bg-gradient-to-r from-[#FFFFFF0A] via-[#FFFFFF33] to-[#FFFFFF0A] my-8" />
        <Wrapper>
            {cardLoading 
                ? (
                    Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
                )
                : cardData.map(data => <Card key={data.id} data={data} />)
            }
        </Wrapper>
        <Button href='/blue/market' color='blue' className='mx-auto w-full sm:w-fit sm:min-w-[200px]'>
            See All Market
            <ArrowUpRightIcon className="w-5" />
        </Button>
    </div>
}
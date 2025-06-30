import type { CryptoData } from "../lib/cryptoData"
import { useRef, useEffect } from "react";
import * as d3 from 'd3';
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from '@heroicons/react/16/solid';

export default function Card({data} : {data: CryptoData}) {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const percentIcon = (data.price_change_percentage_1h_in_currency < 0) ? <ArrowTrendingDownIcon className='fill-red-600 w-4 h-4' /> : <ArrowTrendingUpIcon className='fill-emerald-600 w-4 h-4' />;

    const getValueDots = (dot: number, percent_1h: number, percent_24h: number, percent_7d: number): number[] => {
      let dataDots: number[]
      let dot_2 = dot / 100 * (100 - percent_1h)
      let dot_3 = dot / 100 * (100 - percent_24h)
      let dot_4 = dot / 100 * (100 - percent_7d)
      dataDots = [dot_4, dot_3, dot_2, dot]
      return dataDots
    }

    const dataDots = getValueDots(data.current_price, data.price_change_percentage_1h_in_currency, data.price_change_percentage_24h_in_currency, data.price_change_percentage_7d_in_currency);
    const color: string = (data.price_change_percentage_1h_in_currency < 0) ? 'text-red-600' : 'text-emerald-600';

    const price = new Intl.NumberFormat("en", { 
        style: "currency", 
        currency: "USD",
        minimumFractionDigits: data.current_price < 1 ? 4 : 2
    }).format(data.current_price);
    const percent = new Intl.NumberFormat("en", {
        style: "percent",
        minimumFractionDigits: 2
    }).format(Math.abs(data.price_change_percentage_24h_in_currency) / 100);

    useEffect(() => {
        const width = 180;
        const height = 100;
        const svg = d3.select(svgRef.current)
          .attr('width', width)
          .attr('height', height);
        svg.selectAll("*").remove();
        const xScale = d3.scaleLinear()
          .domain([0, dataDots.length - 1])
          .range([0, width]);
  
        const yScale = d3.scaleLinear()
          .domain([d3.min(dataDots)!, d3.max(dataDots)!])
          .range([height - 12, 0]);
  
        const line = d3.line<number>()
          .x((_, i) => xScale(i))
          .y(d => yScale(d));
  
        const isIncreasing = dataDots[dataDots.length - 1] > dataDots[dataDots.length - 2];
        const lineColor = isIncreasing ? '#059669' : '#dc2626';
  
        svg.append("path")
          .datum(dataDots)
          .attr("fill", "none")
          .attr("stroke", lineColor)
          .attr("stroke-width", 2)
          .attr("filter", `drop-shadow(0px 8px 4px ${lineColor})`)
          .attr("d", line);
  
    }, [data])

    return (
        <div className="flex flex-col justify-center cursor-pointer hover:scale-105 shadow-md/30 hover:shadow-white/50 gap-5 rounded-md bg-[#1E1F25] lg:bg-[#131517] lg:border-2 lg:border-[#1E1F25] p-5 w-[240px] h-[350px]">
            <div className='flex flex-col items-center gap-5'>
                <img 
                    src={data.image}
                    alt={data.name}
                    width={48}
                    height={48}
                    className='w-12 h-12'
                />
                <div className='flex flex-col justify-center gap-2'>
                <h6 className='text-center font-normal text-xl text-white overflow-hidden max-w-[180px] truncate'>
                    {data.name}
                </h6>
                <p className="text-center text-[#ADB3BF] text-sm">
                    {data.symbol.toUpperCase()}
                </p>
                <div className="flex flex-row gap-1 items-center justify-center">
                    {percentIcon}
                    <p className={`font-semibold ${color}`}>{percent}</p>
                </div>
                </div>
                <p className='text-center font-semibold text-2xl text-white'>{price}</p>
                <svg ref={svgRef} width={180} height={100}></svg>
            </div>
        </div>
    );
}
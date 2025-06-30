import Button from "../components/Button";
import { chooseCryptoCards } from "../lib/chooseCryptoCards";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function TestimonialsSection() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    return <div className="flex flex-col gap-7">
        <div className="flex flex-col items-center gap-7">
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white">Why Choose Crypto Brains!</h2>
          <p className="text-[#ADB3BF] text-lg font-normal">
            When an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <hr className="font-bold text-4xl md:text-5xl lg:text-6xl text-white" />
        <div className="flex flex-wrap justify-center lg:flex-row-reverse lg:justify-between lg:flex-nowrap">
          <img
            alt="graph image"
            width={600}
            height={487}
            loading="lazy"
            src={'/graph.png'}
            className="drop-shadow-custom w-[345px] lg:w-[360px] lg:h-[280px] xl:w-[420px] xl:h-[340px] 2xl:w-[600px] 2xl:h-[487px] self-center"
          />
          <div className="w-full text-center lg:w-1/2 mt-10">
            <div 
              className="relative overflow-hidden w-full h-[190px] lg:h-fit lg:hidden"
              onClick={() => { setCurrentCardIndex(prev => (prev + 1) % chooseCryptoCards.length) }}
              onContextMenu={e => { 
                e.preventDefault(); 
                setCurrentCardIndex(prev => (prev - 1 + chooseCryptoCards.length) % chooseCryptoCards.length); 
              }}
            >
              <div className='absolute w-full h-full flex flex-col gap-5'>
                <h5 className='text-[#808A9A] text-6xl font-normal'>{chooseCryptoCards[currentCardIndex].count}</h5>
                <div className='flex flex-col gap-3 text-center'>
                  <h6 className='text-white text-xl font-semibold'>{chooseCryptoCards[currentCardIndex].header}</h6>
                  <p className='text-[#CFD3DA] text-sm font-normal'>{chooseCryptoCards[currentCardIndex].content}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:hidden">
              <Button color='blue' className='w-full' href='/blue/trade'>
                Start Now
                <ArrowUpRightIcon className='w-5' />
              </Button>
              <div className='flex flex-row min-w-40 max-w-44 h-1 justify-between self-center gap-1'>
                {(() => {
                  const cardsNav = [];
                  for (let i = 0; i < chooseCryptoCards.length; i++) {
                    cardsNav.push(
                      <div 
                        className={`min-w-7 h-full cursor-pointer
                          ${i === currentCardIndex ? 'scale-110 bg-white' : 'bg-slate-500 hover:scale-110 hover:bg-slate-300'}`
                        } 
                        key={i}
                        onClick={() => {setCurrentCardIndex(i)}}
                      ></div>
                    )
                  }
                  return cardsNav
                })()}
              </div>
            </div>
            <div className="hidden lg:flex flex-col">
              {chooseCryptoCards.map((card) => {
                return <div className="flex flex-row gap-5 mb-10 justify-between" key={card.id}>
                          <div className="flex flex-row gap-5 justify-start">
                            <h5 className="text-[#808A9A] text-6xl font-normal">{card.count}</h5>
                            <div className="flex flex-col text-left gap-3">
                              <h6 className="text-[#ADB3BF] text-xl font-semibold">{card.header}</h6>
                              <p className="text-[#CFD3DA] text-sm font-normal">{card.content}</p>
                            </div>
                          </div>
                          <Button color='none' href='/blue/trade' className={'self-center'}>
                            Start Now
                            <ArrowUpRightIcon className='w-5' />
                          </Button>
                        </div>
              })}
              <hr className="w-full h-px border-none bg-gradient-to-r from-white to-[#FFFFFF05] mb-10"/>
            </div>
          </div>
        </div>
    </div>
}
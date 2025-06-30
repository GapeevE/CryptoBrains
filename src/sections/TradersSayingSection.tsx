import { useState } from "react";
import { posts } from "../lib/posts";
import { MegaphoneIcon } from "@heroicons/react/24/solid";

export default function TradersSayingSection() {
    const [currentPostIndex, setCurrentPostIndex] = useState(0);

    return <div className="flex flex-col gap-7">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-7">
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center lg:text-start">What Traders Saying About Us! </h2>
            <p className="text-[#ADB3BF] text-lg font-normal w-2/3 text-center lg:text-start">
              Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled type specimen book.
            </p>
        </div>
        <hr className="w-full border-none rounded-sm h-1 bg-gradient-to-r from-[#FFFFFF0A] via-[#FFFFFF33] to-[#FFFFFF0A] my-8" />
        <div 
          className="relative overflow-hidden w-full h-[326px] max-w-[1000px] self-center"
          onClick={() => {setCurrentPostIndex((currentPostIndex + 1) % posts.length)}}
          onContextMenu={(e) => { 
            e.preventDefault();
            setCurrentPostIndex((currentPostIndex - 1 + posts.length) % posts.length); 
          }}
        >
          <div className='absolute w-full h-full flex flex-col gap-5 bg-[#272A34] rounded-xl p-5 lg:px-7 lg:py-10'>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-5">
                <img
                  width={72}
                  height={72}
                  alt="logo user"
                  loading="lazy"
                  src={posts[currentPostIndex].logo}
                  className="w-[62px] h-[62px] lg:w-[72px] lg:h-[72px]"
                  />
                <div className="flex flex-col gap-1">
                  <h5 className="text-white font-semibold text-xl">{posts[currentPostIndex].name}</h5>
                  <p className="text-[#BFC4CD] font-normal text-sm">{posts[currentPostIndex].country}</p>
                </div>
              </div>
              <MegaphoneIcon className="w-12 lg:w-16 self-start fill-[#FFFFFF1A]" />
            </div>
            <p className="text-white text-lg lg:text-2xl font-normal overflow-auto wrapper">{posts[currentPostIndex].content}</p>
          </div>
        </div>
        <div className='flex flex-row min-w-40 max-w-44 h-1 justify-between self-center gap-1'>
          {(() => {
            const cardsNav = []
            for (let i = 0; i < posts.length; i++) {
            cardsNav.push(
              <div 
                className={`min-w-7 h-full cursor-pointer
                  ${i === currentPostIndex ? 'scale-110 bg-white' : 'bg-slate-500 hover:scale-110 hover:bg-slate-300'}`}
                key={i}
                onClick={() => {setCurrentPostIndex(i)}}
              ></div>
            )}
            return cardsNav
          })()}
        </div>
      </div>
}
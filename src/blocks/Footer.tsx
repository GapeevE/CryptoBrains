import { footerMenu } from "../lib/footerMenu";
import { community } from "../lib/community";
import Logo from "../components/Logo";

export default function Footer({path} : {path: string}) {
    return (
        <div className="bg-[#1E1F25] px-2 sm:px-4 md:px-12 lg:px-24 xl:px-32 pt-8 lg:pt-16 pb-2 sm:pb-4 md:pb-8 gap-5 lg:gap-7">
            <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-5">
                <Logo />
                <div className="flex flex-row gap-4 md:gap-7 justify-center flex-wrap">
                    <h4 className="font-normal text-base md:text-lg text-white lg:text-xl">Community-</h4>
                    {community.map((icon) => {
                        return (
                            <a href={icon.href} key={icon.id}>
                                <img
                                    width={28}
                                    height={28}
                                    alt={icon.alt}
                                    src={`/community/${icon.src}`}
                                />
                            </a>
                        )
                    })}
                </div>
            </div>
            <hr className="w-full border-none rounded-sm h-1 bg-gradient-to-r from-[#FFFFFF0A] via-[#FFFFFF33] to-[#FFFFFF0A] my-8" />
            <div className="flex flex-row flex-wrap gap-5 lg:gap-7 justify-start md:justify-between">
                {footerMenu.map((item) => {
                    return (
                        <div className='flex flex-col gap-5' key={item.menuId}>
                            <h6 className="text-white text-lg font-semibold">
                                {item.header}
                            </h6>
                            {item.content.map((item) => (
                                <div className="flex flex-row gap-1" key={item.id}>
                                    <a
                                        className={`border-b-2 text-base font-normal hover:text-[#1B70F1] hover:border-b-[#1B70F1]
                                            ${path === item.href ? 'text-[#1B70F1] border-b-[#1B70F1]' : 'text-[#ADB3BF] border-b-transparent'}`}
                                        href={item.href}
                                    >
                                        {item.text}
                                    </a>
                                    {item.badge && <div className='bg-[#1B70F11A] py-1 px-2 rounded-sm'>
                                        <p className='text-[#1B70F1] text-sm font-normal'>
                                            {`(${item.badge.comment})`}
                                        </p>
                                    </div>}
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
            <hr className="w-full border-none rounded-sm h-1 bg-gradient-to-r from-[#FFFFFF0A] via-[#FFFFFF33] to-[#FFFFFF0A] my-8" />
            <div className="flex flex-row gap-2 flex-wrap-reverse md:gap-5 items-center justify-center">
                <p className="text-white font-normal text-base">
                    ©Copyright 2022 All Rights Are Reserved.
                </p>
                <div className="hidden md:block w-2 h-2 bg-white rounded-full"></div>
                <a href='/pink/privacyPolicy' className={`border-b-2  font-normal text-base hover:text-[#1B70F1] hover:border-b-[#1B70F1]
                    ${path === '/pink/privacyPolicy' ? "text-[#1B70F1] border-b-[#1B70F1]" : "text-[#FDFDFD] border-b-transparent"}`}>Privacy Policy</a>
                <div className="hidden md:block w-2 h-2 bg-white rounded-full"></div>
                <a href='/pink/termsOfUse' className={`border-b-2 font-normal text-base hover:text-[#1B70F1] hover:border-b-[#1B70F1]
                    ${path === '/pink/termsOfUse' ? "text-[#1B70F1] border-b-[#1B70F1]" : "text-[#FDFDFD] border-b-transparent"}`}>Terms of Use</a>
            </div>
        </div>
    )
}
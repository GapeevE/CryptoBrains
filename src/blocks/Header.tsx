import { useState } from "react";
import { links } from "../lib/links";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

export default function Header({path} : {path: string}) {
    const [barsMenuHeight, setBarsMenuHeight] = useState('h-0');

    const handleClickBarsMenu = () => {
        if(barsMenuHeight === 'h-0') {
            setBarsMenuHeight('h-28')
        } else {
            setBarsMenuHeight('h-0')
        }
    }

    return (
        <header className="flex flex-row bg-[#1E1F25] border-b-2 border-b-white/10 md:border-b-[#1E1F25] rounded-b-xl md:rounded-b-none px-2 sm:px-4 md:px-12 lg:px-24 xl:px-32 py-2 sm:py-4 md:py-8 sm:gap-1 xl:gap-8 justify-between items-center flex-wrap">
            <Logo />
            <div className="hidden md:flex flex-row gap-1 lg:gap-3 justify-between items-center">
                {links.map((link) => {
                    return (
                    <a
                        key={link.id}
                        href={link.href}
                        className={`text-[#808A9A] font-normal text-lg sm:px-2 lg:px-4 py-2 rounded-md border-b-2 border-b-[#1E1F25] hover:border-b-white hover:text-white transition-colors duration-500 ease-in-out
                            ${path === link.href && 'border-b-white text-white'}`}
                    >
                        <p>{link.name}</p>
                    </a>
                    );
                })}
            </div>
            <div className="flex flex-row gap-2">
                <Button href="/red/login" color="none" className="px-3 lg:px-6">Log In</Button>
                <Button href="/red/signup" color="blue" className="hidden md:block">Sign Up</Button>
                <Bars3BottomRightIcon className="fill-white cursor-pointer block md:hidden w-6" onClick={ handleClickBarsMenu }/>
            </div>
            <div className={ `flex md:hidden flex-col items-end w-full overflow-y-auto overflow-hidden transition-all duration-300 ${ barsMenuHeight }` }>
                {links.map((link) => {
                    return (
                    <a
                        key={link.id}
                        href={link.href}
                        className={`text-[#808A9A] font-normal text-sm border-none hover:text-white
                        ${path === link.href && 'border-b-white text-white'}`}
                    >
                        <p>{link.name}</p>
                    </a>
                    );
                })}
            </div>
        </header>
    )
}
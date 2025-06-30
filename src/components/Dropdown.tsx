import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import type { Answer } from "../lib/answers";

export default function Dropdown({data} : {data: Answer}) {
    const [styles, setStyles] = useState({icon: '', text: 'h-0', show: false})

    const handleClickIcon = () => {
        (styles.show)?setStyles({icon: 'transform -rotate-90', text: 'h-0', show: false}):setStyles({icon: 'transform rotate-45', text: 'h-20 owerflow-y-auto wrapper', show: true})
    }

    return (
        <div className="flex flex-col p-5 border border-white rounded-md max-w-[780px]">
            <div className="flex flex-row justify-between">
                <h6 className="font-semibold text-lg lg:text-2xl text-white overflow-hidden">{data.header}</h6>
                <PlusIcon onClick={ handleClickIcon} className={`fill-white min-w-6 w-6 self-start cursor-pointer transition-transform ${styles.icon} duration-300 ease-in-out`} />
            </div>
            <p className={`text-[#ADB3BF] text-sm lg:text-lg font-normal overflow-hidden ${styles.text} transition-all duration-1000 ease-in-out`}>{data.content}</p>
        </div>
    )
}

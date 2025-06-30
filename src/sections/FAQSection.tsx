import Dropdown from "../components/Dropdown"
import { answers } from "../lib/answers"

export default function FAQSection() {
    return <div className="flex flex-col">
        <div className="flex flex-col gap-7">
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center overflow-hidden">Frequently Asked Questions</h2>
          <p className="text-[#ADB3BF] text-lg font-normal text-center">
            When an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <hr className="w-full border-none rounded-sm h-1 bg-gradient-to-r from-[#FFFFFF0A] via-[#FFFFFF33] to-[#FFFFFF0A] my-8" />
        <div className="flex flex-wrap justify-center gap-7">
          {answers.map(answer => {
            return <Dropdown key={answer.id} data={answer} />
          })}
        </div>
      </div>
}
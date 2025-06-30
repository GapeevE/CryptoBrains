export default function Button({ href, color, className, children }: { href: string, color: string, className?: string | null, children: React.ReactNode }) {
    return (
        <a
            href={ href }
            className={
                `flex items-center justify-center gap-1 px-6 py-3 rounded text-sm md:text-lg text-nowrap transition-colors duration-200 ease-in-out ${className}
                ${color === 'blue' && 'bg-[#1B70F1] text-white fill-white shadow-md border-2 border-[#1B70F1] hover:shadow-blue-700/30 hover:bg-transparent hover:text-[#1B70F1] hover:fill-[#1B70F1]'}
                ${color === 'white' && 'bg-white text-[#1B70F1] fill-[#1B70F1] shadow-xl border-2 border-white hover:shadow-white/30 hover:bg-transparent hover:text-white hover:fill-white'}
                ${color === 'transparent' && 'bg-white lg:bg-transparent text-[#1E1F25] lg:text-white fill-[#1E1F25] lg:fill-white border-2 border-white shadow-sm shadow-white hover:shadow-md hover:shadow-white'}
                ${color === 'none' && 'bg-transparent text-white fill-white border-2 border-transparent hover:border-white'}`}
        >
            { children }
        </a>
    )
}
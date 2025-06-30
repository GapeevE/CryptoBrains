export default function SkeletonCard() {
    return <div className="flex flex-col justify-center animate-pulse gap-5 rounded-md bg-[#1E1F25] lg:bg-[#131517] lg:border-2 lg:border-[#1E1F25] p-5 w-[240px] h-[350px]">
        <div className="h-12 w-12 rounded-full bg-[#3a3b3f]"></div>
        <div className="h-7 w-16 rounded bg-[#3a3b3f]"></div>
        <div className="h-5 w-20 rounded bg-[#3a3b3f]"></div>
        <div className="h-6 w-14 rounded bg-[#3a3b3f]"></div>
        <div className="h-8 w-12 rounded bg-[#3a3b3f]"></div>
        <div className="h-[100px] w-[180px] rounded bg-[#3a3b3f]"></div>
    </div>
}
export default function Block({ children, color } : {children?: React.ReactNode, color?: string}) {
    return <div className={
        `px-2 sm:px-4 md:px-12 lg:px-24 xl:px-32 py-5 md:py-10 overflow-hidden
        ${color === "grey" && "bg-[#1E1F25]"}
        `}>{children}</div>
}
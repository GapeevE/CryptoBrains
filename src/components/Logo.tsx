export default function Logo() {
    return (
        <div className="block">
            <a href="/">
                <img
                    src={'/logo-desktop.png'}
                    alt="logotype"
                    width={150}
                    height={46}
                    loading="lazy"
                    className="hidden md:block"
                />
                <img
                    src={'/logo-mobile.png'}
                    alt="logotype"
                    width={92}
                    height={28}
                    loading="lazy"
                    className="block md:hidden"
                />
            </a>
        </div>
    )
}
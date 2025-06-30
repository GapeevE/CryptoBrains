import { useState, useEffect, useRef, type ReactNode } from "react";

export default function Wrapper({ children }: { children?: ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
    const scrollIntervalRef = useRef<number | null>(null);
    const scrollPositionRef = useRef(0);

    const scrollToNext = () => {
        if (!wrapperRef.current || !autoScrollEnabled) return;
        const wrapper = wrapperRef.current;
        const children = wrapper.children;
        if (children.length === 0) return;
        const firstChild = children[0] as HTMLElement;
        const cardWidth = firstChild.offsetWidth;
        const gap = parseFloat(getComputedStyle(wrapper).gap);
        const step = cardWidth + gap;
        const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
        if (scrollPositionRef.current >= maxScroll - step) {
        wrapper.scrollTo({ left: 0, behavior: 'smooth' });
        scrollPositionRef.current = 0;
        } else {
        scrollPositionRef.current += step;
        wrapper.scrollTo({ 
            left: scrollPositionRef.current, 
            behavior: 'smooth' 
        });
        }
    };
    useEffect(() => {
        if (!autoScrollEnabled && scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
        return;
        }
        
        if (autoScrollEnabled && !scrollIntervalRef.current) {
        scrollIntervalRef.current = window.setInterval(scrollToNext, 2000);
        }
        
        return () => {
        if (scrollIntervalRef.current) {
            clearInterval(scrollIntervalRef.current);
            scrollIntervalRef.current = null;
        }
        };
    }, [autoScrollEnabled]);

    useEffect(() => {
        const handleResize = () => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollLeft = 0;
            scrollPositionRef.current = 0;
        }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div 
        ref={wrapperRef}
        className="flex flex-row gap-3 md:gap-5 lg:gap-7 w-full my-4 py-6 overflow-auto wrapper"
        onMouseEnter={() => setAutoScrollEnabled(false)}
        onMouseLeave={() => setAutoScrollEnabled(true)}
        >
        {children}
        </div>
    );
}
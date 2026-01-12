import { useEffect, useState } from "react";

type Options = {
    rootMargin?: string;
    threshold?: number;
};

export function useInView<T extends Element>(
    ref: React.RefObject<T | null>,
    { rootMargin = "0px", threshold = 0.8 }: Options = {}
): boolean {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { rootMargin, threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [ref, rootMargin, threshold]);

    return inView;
}

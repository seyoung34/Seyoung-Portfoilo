import { useEffect, useRef, useState } from "react";

type Options = {
    sectionCount: number;
    isEnabled: boolean;
    threshold?: number;
    cooldownMs?: number;
};

export default function useSnapScroll({
    sectionCount,
    isEnabled,
    threshold = 40, //임계값
    cooldownMs = 700,
}: Options) {
    const [index, setIndex] = useState(0);
    const isLockRef = useRef(false);
    const accRef = useRef(0);

    useEffect(() => {
        if (!isEnabled) return;

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (isLockRef.current) return;


            accRef.current += e.deltaY;
            if (Math.abs(accRef.current) < threshold) return;

            isLockRef.current = true;
            console.log("rock on");
            console.log("deltaY:", e.deltaY, "deltaMode:", e.deltaMode);

            const dir = accRef.current > 0 ? 1 : -1;
            accRef.current = 0;

            setIndex((prev) => {
                const next = Math.min(Math.max(prev + dir, 0), sectionCount - 1);
                window.scrollTo({ top: next * window.innerHeight, behavior: "smooth" });
                // console.log(`현재 next : ${next}`);
                return next;
            });

            window.setTimeout(() => {
                isLockRef.current = false;
                console.log("rock off");
            }, cooldownMs);
        };

        window.addEventListener("wheel", onWheel, { passive: false });

        return () => window.removeEventListener("wheel", onWheel);
    }, [isEnabled, sectionCount, threshold, cooldownMs]);

    return index;
}

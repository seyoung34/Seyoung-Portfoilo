import { useEffect, useState } from "react";

export function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // const mq = window.matchMedia("(pointer: coarse), (max-width: 768px)"); 우선 터치스크린도 포함
        const mq = window.matchMedia("(max-width:768px)");
        const update = () => setIsMobile(mq.matches);

        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    return isMobile;
}

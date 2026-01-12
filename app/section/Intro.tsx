import { useRef } from "react";
import { useInView } from "../useInView";

export default function Intro() {

    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { threshold: 0.8 });

    return (
        <section ref={sectionRef} className="min-h-screen w-full flex flex-col items-center justify-center">
            <div className={`relative h-0.5 w-full bg-accent ${inView ? "animate-sweep" : "opacity-0"}`} />

            <div className={`w-3/4 min-h-[20vh] text-white p-2 ${inView ? "animate-appear" : "opacity-0 translate-y-10"}`}>
                <div className="text-7xl font-bold">LEE SE YOUNG</div>
                <div className="m-3 font-medium">junior frontend developer</div>
                <ProfileButton />
            </div>
        </section>
    );
}



function ProfileButton() {
    return (
        <div className="inline-flex items-center gap-3 rounded-full border border-border px-3 py-2">
            <UnderlineLink href="www.naver.com" name="GitHub" />

            <span className="h-4 w-px bg-border" />

            <UnderlineLink href="www.naver.com" name="Email" />

            <span className="h-4 w-px bg-border" />

            <UnderlineLink href="www.naver.com" name="Phone" />
        </div>
    );
}


function UnderlineLink({ href, name }: { href: string, name: string }) {
    return (
        <a
            href={href}
            className="
        relative inline-block
        font-medium
        text-text
        hover:text-accent
        after:absolute
        after:left-0
        after:-bottom-[2px]
        after:h-[1px]
        after:w-full
        after:origin-center
        after:scale-x-0
        after:bg-accent
        after:transition-transform
        after:duration-300
        after:ease-out
        hover:after:scale-x-100
      "
        >
            {name}
        </a>
    );
}


function SweepLine() {
    return (
        <div className="absolute h-[2px] w-full bg-accent animate-sweep" />

    )
}
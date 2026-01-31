import { useRef } from "react";
import { useInView } from "../hooks/useInView";

export default function Intro({ isMobile }: { isMobile: boolean }) {

    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { threshold: 0.8 });

    if (isMobile) {

        return (
            <section ref={sectionRef} className="min-h-screen w-full flex flex-col items-center justify-center">
                <div className={`relative h-0.5 w-full bg-accent ${inView ? "animate-sweep" : "opacity-0"}`} />

                <div className={`w-3/4 min-h-[20vh] text-white p-2 ${inView ? "animate-appear" : "opacity-0 translate-y-10"}`}>
                    <div className="text-7xl font-bold">
                        <div>Lee</div>
                        <div>Se</div>
                        <div>Young</div>
                    </div>
                    <div className="m-3 font-medium">junior frontend developer</div>
                    <ProfileButton />
                </div>
            </section>
        );
    }

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
        <div className="
            inline-flex items-center gap-3
            rounded-full border border-border
            px-4 py-3
            bg-white/5
        ">
            <ContactLink
                label="GitHub"
                href="https://github.com/seyoung34"
                external
            />

            <Divider />

            <ContactLink
                label="Email"
                href="mailto:jupi0304@naver.com"
                copyText="jupi0304@naver.com"
            />

            <Divider />

            <ContactLink
                label="Phone"
                href="tel:01033724784"
                copyText="010-3372-4784"
            />
        </div>
    );
}

function Divider() {
    return <span className="h-4 w-px bg-border" />;
}



function ContactLink({
    label,
    href,
    copyText,
    external,
}: {
    label: string;
    href: string;
    copyText?: string;
    external?: boolean;
}) {
    const handleClick = () => {
        if (copyText && !isMobileDevice()) {
            navigator.clipboard.writeText(copyText);

        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="
                relative inline-flex items-center gap-1
                px-1 font-medium
                text-text hover:text-accent
                after:absolute after:left-0 after:-bottom-[2px]
                after:h-[1px] after:w-full
                after:origin-left after:scale-x-0
                after:bg-accent
                after:transition-transform after:duration-300
                hover:after:scale-x-100
            "
        >
            {label}
        </a>
    );
}

function isMobileDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
}

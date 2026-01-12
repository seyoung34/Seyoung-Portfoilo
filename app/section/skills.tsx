import { useRef } from "react";
import { useInView } from "../useInView";

type Skill = {
    name: string;
    src: string;
    note: string | null; // 분류
};

const skills: Skill[] = [
    {
        name: "TypeScript",
        src: "/skillsImage/typescript.png",
        note: "Language",
    },
    {
        name: "JavaScript",
        src: "/skillsImage/javascript.png",
        note: "Language",
    },
    {
        name: "Kotlin",
        src: "/skillsImage/kotlin.png",
        note: "Language",
    },
    {
        name: "Git",
        src: "/skillsImage/git.png",
        note: "DevOps",
    },
    {
        name: "Supabase",
        src: "/skillsImage/supabase.png",
        note: "DB",
    },
    {
        name: "Firebase",
        src: "/skillsImage/firebase.png",
        note: "DB",
    },
    {
        name: "Tailwind CSS",
        src: "/skillsImage/tailwindcss.png",
        note: "Frontend",
    },
    {
        name: "Three.js",
        src: "/skillsImage/three.png",
        note: "Frontend",
    },
    {
        name: "Figma",
        src: "/skillsImage/figma.png",
        note: "Design",
    },
];

type Props = {
    skill: Skill;
    className?: string;
};

export default function SkillsGrid() {

    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { threshold: 0.5 });


    return (
        <section ref={sectionRef} className="min-h-screen w-full flex items-center justify-center flex-col sm:flex-row">
            <div className={`text-white text-7xl w-1/3 h-full flex items-center justify-center ${inView ? "animate-appear-left" : "opacity-0"}`}>Skills</div>
            <div className={`w-2/3 h-full flex items-center justify-center ${inView ? "animate-appear-right" : "opacity-0"}`}>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-3 w-[90%] p-10">
                    {skills.map((s) => (
                        <SkillCard key={s.name} skill={s} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillCard({ skill, className }: Props) {
    return (
        <article
            className={[
                "group relative overflow-hidden rounded-[18px] border",
                "bg-surface border-border",

                "transition-[transform,box-shadow,border-color] duration-200 ease-out",
                "hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.35)]",
                "hover:border-[rgba(46,137,228,0.35)]",

                "w-3/4 aspect-square",

                className ?? "",
            ].join(" ")}
            aria-label={skill.name}
        >
            {/* 이미지 */}
            <img
                src={skill.src}
                alt={skill.name}
                loading="lazy"
                className={[
                    "absolute inset-0 h-full w-full object-cover",
                    "scale-[1.02] transition-[transform,filter] duration-200 ease-out",
                    "group-hover:scale-[1.06] group-hover:saturate-[1.05] group-hover:contrast-[1.03]",
                ].join(" ")}
            />

            {/* 오른쪽에서 들어오는 라벨 */}
            <div
                className={[
                    "absolute inset-y-0 right-0 z-10",
                    "w-[70%]",
                    "translate-x-full group-hover:translate-x-0",
                    "transition-transform duration-300 ease-out",

                    "border-l border-border",
                    "bg-surface/90",
                    "backdrop-blur-[6px]",

                    "flex items-center",
                ].join(" ")}
            >
                <div className="px-4">
                    <p className="text-white font-extrabold tracking-[-0.01em] text-[16px]">
                        {skill.name}
                    </p>

                    {skill.note && (
                        <p className="mt-1 text-muted text-[12px] font-semibold">
                            {skill.note}
                        </p>
                    )}


                    <div className="mt-3 h-px w-10 bg-accent opacity-70" />
                </div>
            </div>

            {/* hover 시 전체에 살짝 어두운 오버레이(선택) */}
            <div
                className={[
                    "absolute inset-0",
                    "bg-black/0 group-hover:bg-black/10",
                    "transition-colors duration-200",
                ].join(" ")}
            />
        </article>
    );
}

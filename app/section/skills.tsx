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


export default function SkillsGrid() {

    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { threshold: 0.5 });


    return (
        <section ref={sectionRef} className="min-h-screen w-full flex items-center justify-center ">
            <div className={`text-white text-7xl w-1/3 h-full flex items-center justify-center ${inView ? "animate-appear-left" : "opacity-0"}`}>Skills</div>
            <div className={`w-2/3 h-full flex items-center justify-center ${inView ? "animate-appear-right" : "opacity-0"}`}>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 ">
                    {skills.map((s) => (
                        <SkillCard key={s.name} skill={s} />
                    ))}
                </div>
            </div>
        </section>
    );
}




type Props = {
    skill: Skill;
    className?: string;
};

function SkillCard({ skill, className }: Props) {
    return (
        <article
            className={[
                "group relative overflow-hidden rounded-[18px] border",
                "bg-[var(--color-surface)] border-[var(--color-border)]",
                "shadow-[0_10px_22px_rgba(0,0,0,0.22)]",
                "transition-[transform,box-shadow,border-color] duration-200 ease-out",
                "hover:-translate-y-[3px] hover:shadow-[0_16px_34px_rgba(0,0,0,0.35)]",
                "hover:border-[rgba(46,137,228,0.35)]",

                "w-[140px] sm:w-[160px] lg:w-[180px] aspect-square",

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
                    "w-[72%] max-w-[240px]", // 라벨 너비 (원하는 느낌에 맞춰 조절)
                    "translate-x-full group-hover:translate-x-0",
                    "transition-transform duration-300 ease-out",
                    // 라벨 배경/테두리
                    "border-l border-[var(--color-border)]",
                    "bg-[rgba(17,26,46,0.92)]", // surface 느낌 + 약간 투명
                    "backdrop-blur-[6px]",
                    // 내부 정렬
                    "flex items-center",
                ].join(" ")}
            >
                <div className="px-4">
                    <p className="text-[var(--color-text)] font-extrabold tracking-[-0.01em] text-[16px]">
                        {skill.name}
                    </p>

                    {skill.note && (
                        <p className="mt-1 text-[var(--color-muted)] text-[12px] font-semibold">
                            {skill.note}
                        </p>
                    )}

                    {/* 얇은 액센트 라인(선택) */}
                    <div className="mt-3 h-px w-10 bg-[var(--color-accent)] opacity-70" />
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

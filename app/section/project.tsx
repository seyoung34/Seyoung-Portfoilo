"use client";

import { useEffect, useMemo, useState } from "react";
import { projects, Trouble, type Project } from "./projectData";
import TroubleCarousel from "./TroubleCarousel";

type Props = {
    isMobile: boolean;
    isModalOpen: boolean;
    activeProject: Project | null;
    onOpenModal: (project: Project) => void;
    onCloseModal: () => void;
};

export default function ProjectSection({
    isMobile,
    isModalOpen,
    activeProject,
    onOpenModal,
    onCloseModal,
}: Props) {

    const [activeIndex, setActiveIndex] = useState(0);

    const total = projects.length;

    const clampIndex = (n: number) => {
        if (total === 0) return 0;
        return (n + total) % total; // 무한 루프
    };

    const goPrev = () => setActiveIndex((v) => clampIndex(v - 1));
    const goNext = () => setActiveIndex((v) => clampIndex(v + 1));


    useEffect(() => {
        if (!isModalOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onCloseModal();

        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isModalOpen, onCloseModal]);


    useEffect(() => {
        if (isModalOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isModalOpen, total]);


    return (
        <section
            className={[
                "w-full h-screen",
                isMobile ? "min-h-screen py-[84px]" : "h-screen flex items-center",
            ].join(" ")}
        >
            <div className="w-full h-full pt-8 flex flex-col">

                <h2 className="text-4xl font-extrabold text-text w-[80%] mx-auto">
                    Projects
                </h2>


                {isMobile ? (
                    <div className="mt-7 flex flex-col gap-4">
                        {projects.map((p) => (
                            <ProjectCard
                                key={p.title}
                                project={p}
                                onClick={() => onOpenModal(p)}
                            />
                        ))}
                    </div>
                )
                    : (
                        <DesktopCarousel
                            projects={projects}
                            activeIndex={activeIndex}
                            onPrev={goPrev}
                            onNext={goNext}
                            onSelect={(idx) => setActiveIndex(idx)}
                            onOpenModal={onOpenModal}
                        />
                    )}
            </div>

            {/* 모달 */}
            {isModalOpen && activeProject && (
                <ProjectModal project={activeProject} onClose={onCloseModal} />
            )}
        </section>
    );
}


function DesktopCarousel({
    projects,
    activeIndex,
    onPrev,
    onNext,
    onSelect,
    onOpenModal,
}: {
    projects: Project[];
    activeIndex: number;
    onPrev: () => void;
    onNext: () => void;
    onSelect: (idx: number) => void;
    onOpenModal: (p: Project) => void;
}) {

    // 카드 사이 간격
    const STEP = 500;

    return (
        <div className="relative flex-1 mt-8 mx-auto w-[92vw] pb-0.5">

            <div className="relative h-full w-full overflow-hidden  flex items-center justify-center">

                <button
                    type="button"
                    onClick={onPrev}
                    className="
                        absolute left-0 top-1/2 z-30 -translate-y-1/2
                        h-12 w-12 rounded-2xl
                        border border-border bg-white/5 backdrop-blur
                        text-text text-2xl hover:border-accent/40
                    "
                >
                    {"<"}
                </button>

                <button
                    type="button"
                    onClick={onNext}
                    className="
                        absolute right-0 top-1/2 z-30 -translate-y-1/2
                        h-12 w-12 rounded-2xl
                        border border-border bg-white/5 backdrop-blur
                        text-text text-2xl hover:border-accent/40
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60
                    "
                >
                    {">"}
                </button>

                {/* 카드들*/}
                {projects.map((p, i) => {

                    const offset = i - activeIndex; // -2,-1,0,1,2...
                    const abs = Math.abs(offset);

                    const isActive = i === activeIndex;

                    const activeCard = {
                        opacity: 1,
                        filter: `blur(0px)`,
                        transform: `translateX(${offset * STEP}px) scale(1.4)`,
                    }

                    const inactiveCard = {
                        opacity: 0.35,
                        filter: `blur(1.5px)`,
                        transform: `translateX(${offset * STEP}px) scale(0.7)`,
                    }


                    return (
                        <div
                            key={p.title}
                            className={[
                                "inline absolute",
                                "transition-[transform,opacity,filter] duration-300 ease-out",
                            ].join(" ")}

                            style={isActive ? activeCard : inactiveCard}
                        >

                            <ProjectCard
                                project={p}
                                onClick={() => {
                                    if (i !== activeIndex) onSelect(i);
                                    else onOpenModal(p);
                                }}

                                className={abs === 0 ? "shadow-[0_22px_60px_rgba(0,0,0,0.55)]" : ""}
                            />
                        </div>
                    );
                })}
            </div>

            {/* 페이지 도트 */}
            <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2">
                <div className="flex items-center gap-2">
                    {projects.map((_, i) => {
                        const on = i === activeIndex;
                        return (
                            <button
                                key={i}
                                type="button"
                                aria-label={`프로젝트 ${i + 1}`}
                                onClick={() => onSelect(i)}
                                className={[
                                    "h-2 rounded-full transition-all duration-200",
                                    on ? "w-10 bg-accent" : "w-2 bg-border/70 hover:bg-border",
                                ].join(" ")}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function ProjectCard({
    project,
    onClick,
    className,
}: {
    project: Project;
    onClick: () => void;
    className?: string;
}) {
    const typeLabel = project.type === "personal" ? "개인" : "팀";

    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "w-[min(420px,78vw)] text-left",
                "relative overflow-hidden rounded-[28px]",
                "border border-border bg-surface",
                "px-7 py-8",
                "transition-[transform,box-shadow,border-color] duration-200 ease-out",
                "hover:border-accent/40",
                className ?? "",
            ].join(" ")}
        >
            <div className="flex flex-col gap-5">


                {/* 프로젝트 제목 */}
                <div className="text-[34px] leading-[1.12] font-black text-text">
                    {project.title}
                </div>

                {/* 팀|개인 */}
                <span
                    className={[
                        "inline-flex w-fit items-center rounded-full px-2 py-2 absolute right-4",
                        "text-[12px] font-extrabold",
                        "border border-border bg-white/5 text-muted",
                        project.type === "personal" ? "border-accent/40 text-text" : "",
                    ].join(" ")}
                >
                    {typeLabel}
                </span>

                {/* 설명 */}
                <div className="text-muted leading-relaxed">
                    {project.summary}
                </div>

                {/* 기간 */}
                <div className="text-accent text-sm font-bold">{project.period}</div>

                {/* 기술 스택 */}
                <div className="w-full flex gap-2 flex-wrap">
                    {project.techStack.map((t) => {
                        return (
                            <span
                                key={t}
                                className={[
                                    "items-center rounded-4xl px-4 py-2",
                                    "text-[10px]",
                                    "border border-border bg-white/5 text-muted",
                                ].join(" ")}
                            >
                                {t}
                            </span>
                        )
                    })}
                </div>


            </div>
        </button>
    );
}


function ProjectModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    const typeLabel = project.type === "personal" ? "개인" : "팀";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
            <div
                className="absolute inset-0 bg-black/55 backdrop-blur-sm"
                onClick={onClose}
            />
            <div
                className={[
                    "relative z-10",
                    "w-[min(1080px,92vw)]",
                    "max-h-[min(90vh,960px)] overflow-auto p-2",
                    "rounded-[18px] border border-border bg-surface",
                    "shadow-[0_18px_52px_rgba(0,0,0,0.45)]",
                    "modal-scrollbar"
                ].join(" ")}
            >
                <div className="flex items-center justify-between gap-3 border-b border-border p-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-3xl font-black text-text">{project.title}</h3>
                        <span
                            className={[
                                "inline-flex items-center rounded-full mx-1 px-2 py-[6px]",
                                "text-[12px] font-extrabold",
                                "border border-border bg-white/5 text-muted",
                                project.type === "personal" ? "border-accent/40 text-text" : "",
                            ].join(" ")}
                        >
                            {typeLabel}
                        </span>
                        <span className="px-4 text-[14px] leading-[1.6] text-muted">
                            {project.period}
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            rounded-full border border-border bg-white/5
                            px-3 py-2 text-[12px] font-extrabold text-muted
                            hover:text-text hover:border-accent/40
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60
                            focus-visible:ring-offset-2 focus-visible:ring-offset-bg
                            "
                    >
                        ✕
                    </button>
                </div>

                <div className="px-4 pt-4 text-xl leading-[1.6] text-muted">
                    {project.summary}
                </div>


                <div className="p-4">
                    <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-[1fr,1.2fr]">
                        <div>
                            <div className="text-xl font-black text-text">{`${project.type == "team" ? "역할" : "기능"}`}</div>
                            <ul className="mt-3 list-disc pl-5 leading-[1.7]">
                                {project.role.map((r) => (
                                    <li key={r} className="text-muted">
                                        {r}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            {project.troubles.length === 0 ? (
                                <div className="mt-3 text-[14px] text-muted">추가 예정</div>
                            ) : (
                                <TroubleCarousel troubles={project.troubles} />
                            )}

                        </div>
                    </div>

                    <div className="mt-5 flex gap-5 border-t border-border pt-4">
                        {project.links.github && <a className="text-muted cursor-pointer hover:text-accent" href={project.links.github}>Github</a>}
                        {project.links.demo && <a className="text-muted cursor-pointer hover:text-accent" href={project.links.demo}>Demo</a>}
                    </div>
                </div>
            </div>
        </div>
    );
}

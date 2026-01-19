"use client";

import { useEffect } from "react";
import { projects, type Project } from "./projectData"
// import TroubleCarousel from "./TroubleCarousel";
// import { Tag } from "../common/Tag";
// import { UnderlineLink } from "../common/UnderlineLink";

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

    // ESC로 닫기
    useEffect(() => {
        if (!isModalOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onCloseModal();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isModalOpen, onCloseModal]);

    return (
        <section
            className={[
                "w-full",
                isMobile ? "min-h-screen py-[84px]" : "h-screen flex items-center",
            ].join(" ")}
        >
            <div className="mx-auto w-[min(1100px,92vw)]">
                <h2 className="text-4xl font-extrabold text-text">
                    Projects
                </h2>

                <div className="mt-7 flex gap-4">
                    {projects.map((p: Project) => (
                        <ProjectCard
                            key={p.title}
                            project={p}
                            onClick={() => onOpenModal(p)}
                        />
                    ))}
                </div>
            </div>

            {/* 모달 */}
            {isModalOpen && activeProject && (
                <ProjectModal project={activeProject} onClose={onCloseModal} />
            )}
        </section>
    );
}


function ProjectCard({
    project,
    onClick,
}: {
    project: Project;
    onClick: () => void;
}) {
    const typeLabel = project.type === "personal" ? "개인" : "팀";

    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "w-full text-left",
                "relative z-1 overflow-hidden rounded-[18px]",
                "border border-border bg-surface",
                "transition-[transform,box-shadow,border-color] duration-200 ease-out",
                "hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)]",
                "hover:border-[rgba(46,137,228,0.35)]",

                "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
            ].join(" ")}
        >
            <div className="flex items-start justify-between gap-4 p-5">
                {/* Left */}
                <div className="flex flex-col gap-2">
                    {/* TitleRow */}
                    <div className="flex flex-wrap items-center gap-[10px]">
                        <span className="h-[10px] w-[10px] rounded-full bg-[var(--color-accent)]" />

                        <div className="text-[18px] font-black text-[var(--color-text)]">
                            {project.title}
                        </div>

                        {/* TypePill */}
                        <span
                            className={[
                                "ml-[6px] inline-flex items-center rounded-full px-[10px] py-[6px]",
                                "text-[12px] font-extrabold",
                                "border border-[var(--color-border)] bg-white/5 text-[var(--color-muted)]",
                                project.type === "personal"
                                    ? "border-[rgba(46,137,228,0.35)] text-[var(--color-text)]"
                                    : "border-[rgba(245,247,255,0.10)]",
                            ].join(" ")}
                        >
                            {typeLabel}
                        </span>
                    </div>

                    {/* Meta */}
                    <div className="text-[14px] leading-[1.6] text-[var(--color-muted)]">
                        {project.period} · {project.summary}
                    </div>

                    {/* TagRow */}
                    {/* <div className="mt-[2px] flex flex-wrap gap-2">
                        {project.techStack.map((t) => (
                            <Tag key={t}>{t}</Tag>
                        ))}
                    </div> */}
                </div>

                {/* Right icon (아코디언의 화살표 느낌 유지) */}
                <span className="mt-1 text-[var(--color-muted)] text-sm">더보기</span>
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
            role="dialog"
            aria-modal="true"
            aria-label="프로젝트 상세"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/55 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div
                className={[
                    "relative z-10",
                    "w-[min(920px,92vw)]",
                    "max-h-[min(82vh,760px)] overflow-auto",
                    "rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface)]",
                    "shadow-[0_18px_52px_rgba(0,0,0,0.45)]",
                ].join(" ")}
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 border-b border-[var(--color-border)] p-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[20px] font-black text-[var(--color-text)]">
                            {project.title}
                        </h3>
                        <span
                            className={[
                                "inline-flex items-center rounded-full px-[10px] py-[6px]",
                                "text-[12px] font-extrabold",
                                "border border-[var(--color-border)] bg-white/5 text-[var(--color-muted)]",
                                project.type === "personal"
                                    ? "border-[rgba(46,137,228,0.35)] text-[var(--color-text)]"
                                    : "border-[rgba(245,247,255,0.10)]",
                            ].join(" ")}
                        >
                            {typeLabel}
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className={[
                            "rounded-full border border-[var(--color-border)] bg-white/5",
                            "px-3 py-2 text-[12px] font-extrabold text-[var(--color-muted)]",
                            "hover:text-[var(--color-text)] hover:border-[rgba(46,137,228,0.35)]",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
                            "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
                        ].join(" ")}
                        aria-label="모달 닫기"
                    >
                        ✕
                    </button>
                </div>

                {/* Meta */}
                <div className="px-4 pt-4 text-[14px] leading-[1.6] text-[var(--color-muted)]">
                    {project.period} · {project.summary}
                </div>

                {/* TagRow */}
                {/* <div className="px-4 pt-3 flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                        <Tag key={t}>{t}</Tag>
                    ))}
                </div> */}

                {/* Body (아코디언 본문 이동) */}
                <div className="p-4">
                    <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-[1fr,1.2fr]">
                        <div>
                            <div className="text-[13px] font-black text-[var(--color-text)]">
                                역할
                            </div>
                            <ul className="mt-3 list-disc pl-5 leading-[1.7]">
                                {project.role.map((r) => (
                                    <li key={r} className="text-[var(--color-muted)]">
                                        {r}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="text-[13px] font-black text-[var(--color-text)]">
                                트러블슈팅
                            </div>
                            {project.troubles.length === 0 ? (
                                <div className="mt-3 text-[14px] text-[var(--color-muted)]">
                                    추가 예정
                                </div>
                            ) : (
                                <div className="mt-3">
                                    {/* <TroubleCarousel troubles={project.troubles} /> */}
                                    트러블캐러셀
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-5 flex gap-5 border-t border-[var(--color-border)] pt-4">
                        {project.links.github && (
                            // <UnderlineLink
                            //     href={project.links.github}
                            //     target="_blank"
                            //     rel="noreferrer"
                            // >
                            //     GitHub
                            // </UnderlineLink>
                            <div>Github</div>
                        )}
                        {project.links.demo && (
                            // <UnderlineLink
                            //     href={project.links.demo}
                            //     target="_blank"
                            //     rel="noreferrer"
                            // >
                            //     Demo
                            // </UnderlineLink>
                            <div>Demo</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

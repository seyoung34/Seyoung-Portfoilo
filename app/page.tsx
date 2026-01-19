"use client";
import { useState } from "react";
import Intro from "./section/Intro";
import Skills from "./section/skills";


import { useIsMobile } from "./hooks/useIsMobile";
import useSnapScroll from "./hooks/useSnapScroll";
import { useBodyScrollLock } from "./hooks/useBodyScrollLock";
import type { Project } from "./section/projectData";
import ProjectSection from "./section/project";


export default function Home() {
  const isMobile = useIsMobile();

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const isModalOpen = activeProject !== null;

  useBodyScrollLock(isModalOpen);

  useSnapScroll({
    sectionCount: 3,
    isEnabled: !isMobile && !isModalOpen, // ✅ 모달 열리면 스냅 중단
    threshold: 80,
    cooldownMs: 400,
  });

  const openProjectModal = (project: Project) => setActiveProject(project);
  const closeProjectModal = () => setActiveProject(null);

  return (
    <div className="overflow-hidden">
      <Intro isMobile={isMobile} />
      <Skills isMobile={isMobile} />

      <ProjectSection
        isMobile={isMobile}
        isModalOpen={isModalOpen}
        activeProject={activeProject}
        onOpenModal={openProjectModal}
        onCloseModal={closeProjectModal}
      />
    </div>
  );
}

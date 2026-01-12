"use client"
import Intro from "./section/Intro";
import SkillsGrid from "./section/skills";
import { useIsMobile } from "./hooks/useIsMobile";
import useSnapScroll from "./hooks/useSnapScroll";

export default function Home() {

  const isMobile = useIsMobile();

  const index = useSnapScroll({
    sectionCount: 2,
    isEnabled: isMobile,
    threshold: 80,
    cooldownMs: 400,
  });

  return (
    <div className="overflow-hidden">
      <Intro isMobile={isMobile} />
      <SkillsGrid isMobile={isMobile} />
    </div>
  );
}

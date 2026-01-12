"use client"
import Intro from "./section/Intro";
import SkillsGrid from "./section/skills";
import { useIsMobile } from "./useIsMobile";

export default function Home() {

  const isMobile = useIsMobile();

  return (
    <div className="overflow-hidden">
      <Intro />
      <SkillsGrid />
    </div>
  );
}

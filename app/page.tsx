"use client"
import Intro from "./section/Intro";
import SkillsGrid from "./section/skills";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Intro />
      <SkillsGrid />
    </div>
  );
}

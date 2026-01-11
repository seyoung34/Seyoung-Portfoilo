"use client"
import Intro from "./section/Intro";
import Skills from "./section/skills";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Intro />
      <Skills />
    </div>
  );
}

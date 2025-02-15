"use client";

import Contact from "@/components/profile/contact";
import Education from "@/components/profile/education";
import EqualEmployment from "@/components/profile/equal-employment";
import JobPreferences from "@/components/profile/job-preferences";
import Language from "@/components/profile/language";
import PortfolioSocials from "@/components/profile/portfolio-socials";
import ProfileAvatar from "@/components/profile/profile-avatar";
import Projects from "@/components/profile/projects";
import Resume from "@/components/profile/resume";
import Skill from "@/components/profile/skill";
import WorkExperience from "@/components/profile/work-experience";
import React from "react";

export default function Profile() {
  return (
    <div className="grid grid-cols-[1fr_3fr] gap-3 h-full">
      <div className="grid grid-cols-1 gap-3 self-start">
        <ProfileAvatar />
        <Contact />
        <EqualEmployment />
        <JobPreferences />
      </div>
      <div className="grid grid-cols-1 gap-3 self-start">
        <Resume />
        <WorkExperience />
        <Education />
        <Projects />
        <PortfolioSocials />
        <Skill />
        <Language />
      </div>
    </div>
  );
}

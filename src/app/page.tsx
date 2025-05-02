import HeroSection from "@/components/HeroSection";
// import SkillsSection from "@/components/SkillsSection"; // Removed
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsInternshipsSection from "@/components/CertificationsInternshipsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      {/* <SkillsSection /> */} {/* Removed */}
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsInternshipsSection />
      {/* Add Footer component here if needed */}
    </main>
  );
}

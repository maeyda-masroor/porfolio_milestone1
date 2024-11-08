import Hero_Section from "@/components/Hero_Section";
import Image from "next/image";
import FeatureSection from "@/components/FeatureSection";
import SkillSection from "@/components/SkillSection";
import Resume from "@/components/MyResume";
import Contact from "@/components/ContactMe";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Hero_Section/>
      <FeatureSection/>
      <SkillSection/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSectoin } from "../components/HeroSection";
import {AboutMe} from "../components/AboutMe"
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* theem togglr */}
            <ThemeToggle />

            {/* background effectt*/}
             <StarBackground/>
           
           {/* navbar */}

             <Navbar/> 

            {/* main componemt */}

            <main>
                <HeroSectoin/>
                <AboutMe/>
                 <SkillsSection/>
                <ProjectSection/>
               <ContactSection/>
            </main>
            {/* <Footer/>   */}
              <Footer/>
        </div>
  );  
};
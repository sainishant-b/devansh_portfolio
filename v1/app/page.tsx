import { SmoothScroll } from "@/components/custom/SmoothScroll";
import { ScrollyCanvas } from "@/components/custom/ScrollyCanvas";
import ProjectsSection from "./sections/ProjectsSection";
import Expertise from "@/components/Expertise";
import ContactMe from "@/components/ContactMe";
import AboutMe from "@/components/Aboutme";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative">

        {/* Scrollytelling Section */}
        <section className="relative">
          <ScrollyCanvas
            frameCount={147}
            framePath="/sequence/webp"
            scrollHeight="500vh"
          />
        </section>

        <div>
          <AboutMe />
        </div>

        <div>
          <Expertise />
        </div>

        {/* Projects Section */}
        <div>
          <ProjectsSection />
        </div>

        {/* Footer / Contact Section */}
        <div>
          <ContactMe />
        </div>
      </main>
    </SmoothScroll>
  );
}

import { getAllProjects } from "@/lib/projects";
import Projects from "@/components/Projects";

export default function ProjectsSection() {
  const projects = getAllProjects();
  
  return <Projects projects={projects} />;
}

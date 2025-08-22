import { ArrowRight, ExternalLink, Github } from "lucide-react";

// ✅ Project data (can be moved to a separate file like projectsData.js)
const projects = [
  {
    id: 1,
    title: "PW WEB Clone",
    description: "A beautiful PW web clone landing page using TailwindCSS",
    image: "/projects/project1.png", // put inside public/projects/
    tags: ["Tailwindcss"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "WMA Clone",
    description: "A responsive WMA clone landing page using TailwindCSS",
    image: "/projects/project2.png",
    tags: ["Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

// ✅ Reusable Project Card
const ProjectCard = ({ project }) => (
  <div id="project" className="group bg-card rounded-lg mx-auto items-center overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
    {/* Project Image */}
    <div className="h-48 items-center mx-auto overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Project Details */}
    <div className="p-6">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

      {/* Links */}
      <div className="flex space-x-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <ExternalLink size={20} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <Github size={20} />
          </a>
        )}
      </div>
    </div>
  </div>
);

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2 className="skill text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully created with attention to detail.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="skill text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">Check My Github <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
};

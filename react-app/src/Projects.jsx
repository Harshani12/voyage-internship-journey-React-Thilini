function Projects() {
  const projects = [
    { id: 1, name: "Portfolio Website", completed: true },
    { id: 2, name: "To-do App", completed: false },
  ];

  return (
    <section id="projects" className="p-8">
      <h3 className="text-2xl font-semibold mb-4">Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mb-2">
            {project.name} - 
            {project.completed ? " ✅ Completed" : " 🚧 In Progress"}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;

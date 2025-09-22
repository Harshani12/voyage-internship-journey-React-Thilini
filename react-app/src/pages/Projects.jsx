import { Link } from "react-router-dom";

const projects = [
  { id: 1, name: "React App" },
  { id: 2, name: "Portfolio Website" },
];

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <Link to={`/projects/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


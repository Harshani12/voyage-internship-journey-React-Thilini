import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  return <h2>Details about Project #{id}</h2>;
}

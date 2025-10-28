import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Project Detail Page</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}

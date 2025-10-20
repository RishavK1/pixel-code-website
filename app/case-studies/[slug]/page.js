import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { projectsData } from '@/data/projects';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Case Study | PixelOrCode`,
    description: project.description,
  };
}

export default function CaseStudyPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyTemplate caseStudy={project} />;
}

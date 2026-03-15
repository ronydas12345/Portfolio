'use client';

import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: '/images/placeholder.svg',
    link: '#'
  },
  {
    id: 2,
    title: 'Project Management Tool',
    description: 'Collaborative project management application with real-time updates, task tracking, and team communication.',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    imageUrl: '/images/placeholder.svg',
    link: '#'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'An intelligent content generation tool powered by AI, helping users create high-quality content in minutes.',
    tech: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Docker'],
    imageUrl: '/images/placeholder.svg',
    link: '#'
  },
  {
    id: 4,
    title: 'Social Analytics Dashboard',
    description: 'Real-time analytics dashboard for tracking social media performance across multiple platforms.',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    imageUrl: '/images/placeholder.svg',
    link: '#'
  }
];

export default function Portfolio() {
  return (
    <section className="w-full min-h-screen bg-gray-50 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-black mb-4">Portfolio</h2>
        <p className="text-xl text-gray-600 mb-12">
          Here are some of my recent projects and works
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative w-full h-64 bg-gray-200">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-900 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-block mt-4 px-6 py-2 bg-slate-950 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

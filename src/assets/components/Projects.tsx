import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Cleanyra - Cleaning Service Website',
      description: 'A modern service-based website built for a professional cleaning company. It features a clean UI, responsive layout, service highlights, and a contact form integrated with a backend and database. The site is designed to convert visitors into leads while maintaining a trustworthy, premium feel.',
      tech: ['React', 'Tailwind CSS', 'Database integration', 'EJS'],
      demo: 'https://cleanyra-cleaning-service-main.vercel.app/',
      github: 'https://github.com/mohammed-fahad-mehraj/cleanyra-cleaning-service-main'
    },
    {
      title: 'Personal Trainer Portfolio',
      description: 'A bold and engaging personal trainer portfolio website designed to showcase expertise, training philosophy, and services. It includes strong visual sections, clear CTAs, and a structured layout optimized for client conversions and personal branding.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      demo: 'https://personal-trainer-production-8bd1.up.railway.app',
      github: 'https://github.com/mohammed-fahad-mehraj/personal-trainer'
    },
    {
      title: 'Italian Bistro – Restaurant Website',
      description: 'A visually rich restaurant website created for an Italian bistro, featuring categorized menus, signature dishes, and high-quality imagery. The project focuses on user experience, performance, and scalable data handling using a real database.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      demo: 'https://lunavella-production.up.railway.app/',
      github: 'https://github.com/mohammed-fahad-mehraj/lunavella'
    },
  
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Real-world applications showcasing my development skills and problem-solving approach
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

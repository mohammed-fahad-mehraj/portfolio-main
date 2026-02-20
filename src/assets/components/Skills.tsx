import { Code, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-purple-600 to-pink-600',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'React']
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-blue-600 to-cyan-600',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'EJS']
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'from-pink-600 to-rose-600',
      skills: ['Git & GitHub', 'Postman', 'VS Code', 'npm', 'Vite', 'Responsive Design']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex p-4 bg-gradient-to-br ${category.color} rounded-lg mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

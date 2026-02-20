import { Code2, Zap, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack web developer with a focus on building real-world applications that solve actual problems. My journey in web development started with a curiosity to understand how websites work, and it quickly grew into a professional skill set.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in creating clean, maintainable code while prioritizing performance and user experience. Whether it's a complex backend system or an intuitive frontend interface, I approach each project with dedication and attention to detail.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <Code2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Freelance-Ready</h3>
                  <p className="text-gray-400 text-sm">Available for remote projects and collaborations</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-3 bg-pink-600/20 rounded-lg">
                  <Zap className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Full-Stack Expertise</h3>
                  <p className="text-gray-400 text-sm">Strong backend and frontend development skills</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Problem-Solving Mindset</h3>
                  <p className="text-gray-400 text-sm">Focused on delivering scalable solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

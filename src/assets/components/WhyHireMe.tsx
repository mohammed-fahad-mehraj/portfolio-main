import { Check } from 'lucide-react';

export default function WhyHireMe() {
  const reasons = [
    {
      title: 'Clean & Maintainable Code',
      description: 'Well-structured, documented code following industry best practices for long-term scalability.'
    },
    {
      title: 'On-Time Delivery',
      description: 'Committed to meeting deadlines without compromising on quality or functionality.'
    },
    {
      title: 'Clear Communication',
      description: 'Regular updates and transparent communication throughout the project lifecycle.'
    },
    {
      title: 'Scalable Solutions',
      description: 'Building applications with growth in mind, ensuring they can handle future expansion.'
    },
    {
      title: 'Client-Focused Approach',
      description: 'Your vision and requirements are at the center of every development decision.'
    },
    {
      title: 'Competitive Pricing',
      description: 'Professional quality services at fair, transparent rates suitable for various budgets.'
    }
  ];

  return (
    <section id="why-hire-me" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Hire Me</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            What sets me apart as your freelance web developer
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to start your project?
              </p>
              <p className="text-gray-300 mb-6">
                Let's discuss how I can help bring your ideas to life
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

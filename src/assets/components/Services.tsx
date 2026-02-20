import { Globe, Cog, Plug, Bug, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies tailored to your business needs.',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Cog,
      title: 'Backend Development',
      description: 'Robust server-side applications with secure APIs and efficient database management.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Plug,
      title: 'API Development & Integration',
      description: 'RESTful API creation and third-party service integrations for seamless functionality.',
      color: 'from-pink-600 to-rose-600'
    },
    {
      icon: Bug,
      title: 'Bug Fixing & Optimization',
      description: 'Identifying and resolving issues while improving performance and code quality.',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Rocket,
      title: 'Deployment & Hosting Support',
      description: 'Complete deployment setup and hosting configuration for your web applications.',
      color: 'from-orange-600 to-amber-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">I Offer</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive web development solutions to bring your ideas to life
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-br ${service.color} rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

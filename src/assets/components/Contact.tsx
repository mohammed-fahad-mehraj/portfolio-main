import { useState } from 'react';
import { Mail, Github, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

  await fetch("http://localhost:5000/api/contact", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(formData)
    });


    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/mohammed-fahad-mehraj?tab=repositories',
      color: 'hover:text-gray-300'
    },
    {
      icon: Phone,
      label: '(774) 519 2306',
      href: 'tel:+17745192306',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRpctMMfBjcGLxXWNlWXsVPDVNCWFbnwcKJsDVQWWzPhDFHVgrBnvrJJvrQRjKjjdgbFmNQ',
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Have a project in mind? Let's work together.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group ${link.color}`}
                    >
                      <Icon className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-300 font-medium">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-600/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-600/20 border border-red-500/50 rounded-lg text-red-300 text-center">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

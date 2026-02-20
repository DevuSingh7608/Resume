import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-600">
        <div className="absolute top-0 right-0 w-150 h-150 bg-yellow-600/5 rounded-full blur-30" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-700/5 rounded-full blur-30" />
      </div>

      <div className="max-w-4xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-6 text-cyan-400">
            Get In Touch
          </span>

          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 text-white">
            Let's <span className="gradient-text">Collaborate</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center space-y-12">

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 w-full">
            
            <a href="mailto:manishsirohi023@gmail.com"
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all group text-center flex flex-col items-center">
              
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiMail className="w-8 h-8 text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400 break-all">devusingh7608@gmail.com</p>
            </a>

            <a href="tel:+91 8171826633"
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all group text-center flex flex-col items-center">
              
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiPhone className="w-8 h-8 text-purple-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+91 8171826633</p>
            </a>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
              
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6">
                <FiMapPin className="w-8 h-8 text-pink-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400">India</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="mailto:devusingh7608@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-cyan-600 to-blue-600 text-white font-bold text-xl rounded-full hover:-translate-y-1 transition-all"
            >
              <FiSend />
              <span>Send Me an Email</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-6 text-center pt-8">
            <h3 className="text-xl font-bold text-white">Find me on</h3>

            <div className="flex gap-4 justify-center">
              <a href="https://github.com/devusingh7608"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all">
                <FiGithub className="w-6 h-6 text-white" />
              </a>

              <a href="https://www.linkedin.com/in/devu-singh-83648621b/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-600/40 transition-all">
                <FiLinkedin className="w-6 h-6 text-blue-500" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
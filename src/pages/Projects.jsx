import { FiGithub, FiExternalLink, FiStar, FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {

  const projects = [
    {
      title: 'Billing Software',
      category: 'Create Bills and Manage Customers',
      description:
        'Developed a responsive Billing Management System using React.js and Tailwind CSS that enables product management, customer tracking, invoice generation, and sales monitoring through an interactive dashboard with role-based authentication.',
      tech: ['React', 'Tailwind ', 'Fake Data'],
      github: 'https://github.com/DevuSingh7608',
      color: 'from-cyan-500 to-blue-500',
  
    },
    {
      title: 'Gym Website',
      category: 'Create a simple Gym website',
      description:
        'Designed and developed a responsive Gym Website using React.js and Tailwind CSS featuring membership plans, trainer profiles, service sections, to enhance user engagement and conversion.',
      tech: ['React', 'Html', 'Css', 'JavaScript'],
      github: 'https://github.com/DevuSingh7608',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Portfolio',
      category: 'Portfolio Website',
      description:
        'Developed a fully responsive personal Portfolio Website using React.js and Tailwind CSS to showcase projects, technical skills, and professional experience with smooth animations and react icons',
      tech: ['React', 'Tailwind', 'React-icon'],
      github: 'https://github.com/DevuSingh7608',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-800">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-linear(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-6 text-cyan-400">
            Selected Works
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
            Crafting <span className="text-cyan-400">Digital Value</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            I build things that live on the internet. Here are some of the projects I've worked on.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:gap-12">

          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 border border-white/5 hover:border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
            >

              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${project.color} opacity-70`} />

              <div className="p-8 md:p-12 grid md:grid-cols-[2fr_1fr] gap-8 items-start">

                {/* Left Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 tracking-wider uppercase border border-white/5">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="flex items-center gap-1 text-yellow-400 text-xs font-semibold uppercase tracking-wider">
                        <FiStar /> Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 text-sm bg-black/30 border border-white/5 rounded-full text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Buttons */}
                <div className="flex flex-col gap-4 md:items-end justify-center h-full">
                  <div className="flex gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <FiGithub className="text-white" />
                    </a>

                  </div>

                  <div className="hidden md:block text-gray-500 text-sm group-hover:text-cyan-400 transition-colors">
                    View Project <FiArrowUpRight className="inline ml-1" />
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Projects;

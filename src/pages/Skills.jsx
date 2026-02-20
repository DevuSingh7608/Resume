import {
  FaReact, FaPython, FaGitAlt,
  FaHtml5, FaCss3Alt, 

} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiMysql, SiPostman,
  SiVite, SiJavascript
} from 'react-icons/si';

const Skills = () => {

  const skillCategories = [
    {
      title: 'Frontend Ecosystem',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-300" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript', icon: <SiJavascript className='bg-black text-yellow-400'/>}
      ]
    },
    {
      title: 'Backend & API',
      skills: [

        { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
        { name: 'REST API', icon: <SiPostman className="text-orange-500" /> },
      ]
    },
 
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: <SiMysql className="text-orange-400" /> },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
        { name: 'Vite', icon: <SiVite className="text-purple-500" /> },
      ]
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-linear(ellipse_at_top,var(--tw-gradient-stops))] from-slate-800 via-slate-850 to-black">
        <div className="absolute top-[-10%] left-[20%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-25" />
        <div className="absolute bottom-[-10%] right-[20%] w-[30%] h-[30%] bg-cyan-600/10 rounded-full blur-25" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-black/5 border border-black/15 hover:bg-black/15 hover:text-cyan-500 backdrop-blur-md rounded-full text-sm font-semibold mb-6 text-cyan-400 ">
            Tech Stack
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
            My <span className="text-cyan-400 mr-30">Arsenal</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A curated list of technologies I use to build robust and scalable applications.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-24">
          {skillCategories.map((category, idx) => (
            <div key={idx}>

              <h2 className="text-3xl font-bold text-black mb-10 pl-4 border-l-4 border-cyan-500">
                {category.title}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

                {category.skills.map((skill, Idx) => (
                  <div
                    key={Idx}
                    className="group relative bg-black/5 border border-black/5 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {skill.icon}
                    </div>

                    <span className="font-medium text-gray-600 group-hover:text-black transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>

        {/* Learning Section */}
        <div className="mt-32 p-12 rounded-[2.5rem] bg-linear-to-br from-slate-500 to-slate-700 border border-black text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Constantly Learning</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Frontend Technologies',
              'Tailwind',
              'Framer Motion',
            ].map((tag, i) => (
              <span
                key={i}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;

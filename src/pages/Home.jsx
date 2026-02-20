import { 
  FiGithub, FiLinkedin, FiMail, FiArrowRight, 
  FiDownload, FiCode, FiLayers, FiZap, 
  FiAward, FiTrendingUp, FiStar, FiCpu, FiGlobe 
} from 'react-icons/fi';

import resume from '../assets/Resume.pdf'

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {

  const techStack = [
    'Html','Css','Tailwind' ,'JavaScript','React'

  ];

  const services = [
    {
      icon: FiCode,
      title: 'Frontend Developer',
      description: 'End-to-end web application development using modern MERN stack and Next.js.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiLayers,
      title: 'UI/UX Design',
      description: 'Crafting pixel-perfect, accessible, and engaging user interfaces.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiZap,
      title: 'Performance',
      description: 'Optimizing for fast load times and SEO best practices.',
      gradient: 'from-orange-500 to-red-500',
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto w-full">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)] mb-20">

          {/* Left Content */}
          <div className="space-y-8">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10">
              <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">
                Available for Work
              </span>
            </div>

            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                Building <span className="text-cyan-400">Digital</span> <br />
                <span className="text-blue-400">Experiences.</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-400 max-w-lg leading-relaxed">
                I'm <span className=" font-semibold text-blue-300">Devu Singh</span>, 
                a Frontend Developer passionate about creating beautiful,
                functional web applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-8 py-4 bg-blue-600 text-black rounded-full font-bold hover:scale-105 transition"
              >
                View Projects <FiArrowRight className="inline ml-2" />
              </Link>

              <a
                href={resume}
                download='DevuSinghResume.pdf'
                className="px-8 py-4 rounded-full border border-blue-600 hover:bg-white/10 transition flex items-center gap-2"
              >
                Download CV <FiDownload />
              </a>
            </div>

            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-blue-500 transition">
                <FiGithub size={24} />
              </a>
              <a href="#" className="hover:text-blue-800 transition">
                <FiLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-red-400 transition">
                <FiMail size={24} />
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden lg:block">
            <div className="w-125 h-150 mx-auto bg-slate-700 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-xl">

              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <FiCode size={32} className="text-cyan-400" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">
                  Clean Code.
                </h3>
                <h3 className="text-3xl font-bold text-gray-400">
                  Elegant Design.
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                  <FiGlobe className="text-blue-400 mb-2 mx-auto" size={24} />
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-xs text-gray-400">Live Projects</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                  <FiCpu className="text-purple-400 mb-2 mx-auto" size={24} />
                  <div className="text-2xl font-bold text-white">Frontend</div>
                  <div className="text-xs text-gray-400">Developer</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-600 border border-white/10 hover:border-white/20 transition"
            >
              <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                <service.icon className="text-white text-2xl" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;

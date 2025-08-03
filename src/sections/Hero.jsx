import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden c-space">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-aqua rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-mint rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-lavender rounded-full animate-bounce"></div>
      </div>
      
      {/* Main content with split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-aqua text-lg font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-mint to-aqua bg-clip-text text-transparent">
              ARYAN
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300">
              MERN Stack Developer & Problem Solver
            </p>
          </div>
          
          <p className="text-neutral-400 text-lg max-w-lg">
            I build full-stack web applications using MongoDB, Express.js, React, and Node.js. 
            Passionate about creating scalable solutions and learning new technologies.
          </p>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-aqua to-mint text-black font-semibold rounded-full hover:scale-105 transition-transform">
              View My Work
            </button>
            <button className="px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative w-full h-96 rounded-2xl bg-gradient-to-br from-midnight/90 to-navy/80 backdrop-blur-sm border border-mint/20 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 p-4 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-neutral-400">~/portfolio</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm">
              <div className="text-mint">$ whoami</div>
              <div className="text-white mb-2">ARYAN - MERN Stack Developer</div>
              
              <div className="text-mint">$ ls skills/</div>
              <div className="text-aqua mb-2">MongoDB  Express.js  React.js  Node.js</div>
              
              <div className="text-mint">$ cat passion.txt</div>
              <div className="text-white mb-2">Building full-stack web applications ⚡</div>
              
              <div className="text-mint animate-pulse">$ _</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

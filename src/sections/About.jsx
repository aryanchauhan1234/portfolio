import CopyEmailButton from "../components/CopyEmailButton";

const About = () => {

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-8 md:auto-rows-[16rem] mt-12">
        
        {/* Grid 1 - Intro */}
        <div className="flex items-center justify-between grid-gradient-purple grid-1-new">
          <div className="z-10 flex-1">
            <p className="headtext">Hi, I'm ARYAN</p>
            <p className="subtext">
              A passionate full-stack developer with a strong focus on the MERN stack. I enjoy crafting seamless, performant, and responsive web experiences. From backend APIs to sleek frontend interfaces, I love solving real-world problems through clean and efficient code.
            </p>
            <p className="subtext mt-2 text-sm text-white/70">
              Currently exploring advanced concepts like serverless architecture, web security, and real-time communication using WebSockets.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">Open to Freelance</span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">Always Learning</span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">Building Side Projects</span>
            </div>
          </div>
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-aqua to-mint animate-pulse"></div>
            <img
              src="assets/your-avatar.png"
              className="relative z-10 w-full h-full rounded-full object-cover"
              alt="Avatar"
            />
          </div>
        </div>

        {/* Grid 2 - MERN Skills */}
        <div className="grid-glass-effect grid-2-new">
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-lg font-semibold mb-4">MERN Stack Expertise</h3>
            <div className="space-y-3">
              <div className="skill-bar">
                <span className="text-sm">MongoDB & Mongoose</span>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full w-[85%] animate-pulse"></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="text-sm">Express.js & REST APIs</span>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-gray-600 to-gray-500 h-2 rounded-full w-[90%] animate-pulse"></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="text-sm">React.js & Custom Hooks</span>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full w-[95%] animate-pulse"></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="text-sm">Node.js & NPM</span>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-600 to-green-500 h-2 rounded-full w-[88%] animate-pulse"></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="text-sm">WebSockets & Realtime</span>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-600 to-red-500 h-2 rounded-full w-[68%] animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 3 - Project Stats */}
        <div className="grid-neon-border grid-3-new">
          <div className="text-center">
            <div className="text-3xl font-bold text-aqua mb-2">10+</div>
            <p className="text-sm text-neutral-400">Full-Stack Projects</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mint mb-2">1+</div>
            <p className="text-sm text-neutral-400">Years Experience</p>
          </div>
        </div>

        {/* Grid 4 - Tech Stack Visualization */}
        <div className="grid-dark-glass grid-4-new relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-aqua/5 to-mint/5"></div>
          <div className="relative z-10 flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-4">Tech Stack Visualized</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="floating-tech-icon bg-green-500/20">
                <span className="text-green-400 font-bold text-xs">MongoDB</span>
              </div>
              <div className="floating-tech-icon bg-gray-500/20">
                <span className="text-gray-400 font-bold text-xs">Express</span>
              </div>
              <div className="floating-tech-icon bg-blue-500/20">
                <span className="text-blue-400 font-bold text-xs">React</span>
              </div>
              <div className="floating-tech-icon bg-green-600/20">
                <span className="text-green-500 font-bold text-xs">Node</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 5 - Status or Availability */}
       <div className="grid-location grid-5-new">
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia to-coral flex items-center justify-center">
      <span className="text-xl"></span>
    </div>
    <div>
      <p className="headtext">Currently Innovating</p>
      <p className="subtext">
        Working on real-time apps, open-source tools, and refining full-stack systems for scalability.
      </p>
      <p className="subtext text-white/60 text-xs mt-1">
        Actively seeking collaborators to build impactful, performance-driven web experiences.
      </p>
    </div>
  </div>
</div>


        {/* Grid 6 - CTA */}
        <div className="grid-cta grid-6-new group cursor-pointer">
  <div className="flex flex-col items-center justify-center h-full text-center">
    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <span className="text-2xl">💬</span>
    </div>
    <p className="headtext mb-2">Let’s Connect</p>
    <p className="subtext text-3xl  mb-1">
      Have an idea, opportunity, or just want to brainstorm?
    </p>
    <p className="subtext text-xs mb-3">
      I'm always up for meaningful tech conversations.
    </p>
    <CopyEmailButton />
  </div>
</div>


      </div>
    </section>
  );
};

export default About;

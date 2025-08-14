import CopyEmailButton from "../components/CopyEmailButton";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-8 md:auto-rows-[16rem]">

        {/* Grid 1 - Intro */}
        <div className="grid-glass-effect grid-gradient-purple col-span-1 md:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-2xl">
          {/* Avatar */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-aqua to-mint animate-pulse" />
            <img
              src="assets/photo3.png"
              alt="Avatar"
              className="relative z-10 w-full h-full object-cover rounded-full border-2 border-mint"
            />
          </div>

          {/* Text */}
          <div className="flex-1 space-y-4 text-center sm:text-left">
            <p className="headtext">
              Hi, I'm{" "}
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-mint to-aqua bg-clip-text text-transparent">
                ARYAN
              </span>
            </p>
           <p className="subtext">
  A passionate full-stack developer with a strong MERN stack focus, committed to crafting seamless, performant, and responsive web experiences.
  I bring a unique blend of analytical thinking, problem-solving skills, and technical expertise. 
</p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
              {/* <span className="px-3 py-1 text-xs rounded-full bg-white/10">Open to Freelance</span> */}
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">Always Learning</span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">Building Side Projects</span>
            </div>
          </div>
        </div>

        {/* Grid 2 - Skills */}
        <div className="grid-glass-effect col-span-1 md:col-span-3 flex flex-col justify-center p-20  rounded-2xl">
          <h3 className="text-lg font-semibold mb-4">MERN Stack Expertise</h3>
          <div className="space-y-3">
            {[
              ["MongoDB & Mongoose", 85, "from-green-500 to-green-400"],
              ["Express.js & REST APIs", 90, "from-red-500 to-red-400"],
              ["React.js & Custom Hooks", 95, "from-blue-500 to-blue-400"],
              ["Node.js & NPM", 88, "from-yellow-500 to-yellow-400"],
              // ["WebSockets & Realtime", 68, "from-red-600 to-red-500"],
            ].map(([label, percent, gradient], i) => (
              <div key={i}>
                <span className="text-sm">{label}</span>
                <div className="w-full bg-white/10 rounded-full h-2 mt-1">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${gradient}`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid 3 - Stats */}
        <div className="grid-glass-effect col-span-1 md:col-span-2 grid grid-cols-2 text-center items-center p-6 gap-4 rounded-2xl">
          <div>
            <div className="text-3xl font-bold text-aqua mb-1">10+</div>
            <p className="text-sm text-neutral-400">Full-Stack Projects</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-aqua mb-1">100+</div>
            <p className="text-sm text-neutral-400">Hours of Coding</p>
          </div>
        </div>







        {/* Grid 6 - CTA */}
        <div className="grid-glass-effect col-span-1 md:col-span-6 group p-6 rounded-2xl">
  {/* Heading */}
  <div className="text-3xl font-bold text-aqua mb-6 border-b border-gray-700 pb-2">
    Education
  </div>

  {/* University Name with Logo */}
  <div className="flex items-center gap-4 mb-3">
    <img
      src="assets/nsit.png"
      alt="NSUT Logo"
      className="w-12 h-12 rounded-full shadow-lg border border-gray-600"
    />
    <span className="text-2xl font-semibold text-white">
      Netaji Subhas University of Technology
    </span>
  </div>

  {/* Degree + Date */}
  <div className="ml-16">
    <p className="text-lg text-gray-300 font-medium">Bachelor of Technology – Mechanical Engineering</p>
    <p className="text-sm text-gray-400 mb-2">SEP 2022 – MAY 2026</p>

    {/* AI Achievement Badge */}
    <div className="inline-block bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm font-medium shadow-md">
      *AI Elective – Grade: 10/10 CGPA
    </div>
  </div>
</div>



        {/* Grid 5 - Tech Stack */}
        <div className="grid-glass-effect col-span-1 md:col-span-2 p-6 relative overflow-hidden  rounded-2xl">
          <h3 className="text-lg font-semibold mb-4">Tech Stack Visualized</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["MongoDB", "bg-green-500/20", "text-green-400"],
              ["Express", "bg-gray-500/20", "text-gray-400"],
              ["React", "bg-blue-500/20", "text-blue-400"],
              ["Node", "bg-green-600/20", "text-green-500"],
            ].map(([tech, bg, text], i) => (
              <div key={i} className={`floating-tech-icon ${bg}`}>
                <span className={`font-bold text-xs ${text}`}>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid 6 - CTA */}
        <div className="grid-glass-effect col-span-1 md:col-span-6 group cursor-pointer p-6 text-center  rounded-2xl">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">💬</span>
            </div>
            <p className="headtext mb-1">Let’s Connect</p>
            <p className="subtext mb-2 text-xl">Got an idea or project?</p>
            <p className="subtext text-xs text-white/70 mb-3">
              I'm always open to meaningful conversations and collaborations.
            </p>
            <CopyEmailButton />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default About;

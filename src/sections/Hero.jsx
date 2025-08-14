import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [runOutput, setRunOutput] = useState([]);
  const [flipped, setFlipped] = useState(false);

  const handleRunCode = () => {
    if (isRunningCode) return;
    setIsRunningCode(true);
    setRunOutput([]);

    const sequence = [
      "$ run about",
      "> Compiling...",
      "> Build successful!",
      "> Redirecting..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      setRunOutput(prev => [...prev, sequence[i]]);
      i++;
      if (i === sequence.length) {
        clearInterval(interval);
        setTimeout(() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
          setIsRunningCode(false);
          setRunOutput([]);
        }, 1000);
      }
    }, 300);
  };
  const techIcons = [
  "devicon-mongodb-plain colored",
  "devicon-express-original",
  "devicon-react-original colored",
  "devicon-nodejs-plain colored",
  "devicon-tailwindcss-plain colored",
  "devicon-git-plain colored",
];

  const navigate = useNavigate();
 const terminalLines = [
  { type: "command", text: "$ whoami" },
  { type: "output", text: "ARYAN - MERN Stack Developer | Competitive Programmer" },

  { type: "command", text: "$ ls skills/" },
  { type: "output", text: "MongoDB  Express.js  React.js  Node.js  TailwindCSS  REST APIs  JWT Auth" },

  { type: "command", text: "$ cat passion.txt" },
  { type: "output", text: "Building full-stack web applications ⚡" },
  { type: "output", text: "Solving complex DSA problems 📈" },
  { type: "output", text: "Exploring AI & Secure Messaging 🔐" },

  { type: "command", text: "$ uptime" },
  { type: "output", text: "3+ years coding experience | 1200+ DSA problems solved" },

  { type: "command", text: "$ git commit -m 'Always learning, always building'" },
];


  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Typing effect
  useEffect(() => {
    if (lineIndex < terminalLines.length) {
      const line = terminalLines[lineIndex].text;
      if (charIndex < line.length) {
        const timeout = setTimeout(() => {
          setCurrentLine(prev => prev + line[charIndex]);
          setCharIndex(charIndex + 1);
        }, 15);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines(prev => [...prev, { ...terminalLines[lineIndex], text: currentLine }]);
          setCurrentLine("");
          setCharIndex(0);
          setLineIndex(lineIndex + 1);
        }, 400);
        return () => clearTimeout(timeout);
      }
    } else {
      setIsTyping(false);
    }
  }, [charIndex, lineIndex]);

  // Trigger flip after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipped(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative flex justify-center py-[12%] overflow-hidden c-space">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-aqua rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-mint rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-lavender rounded-full animate-bounce"></div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
        {/* Text Section */}
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
            I build full-stack web applications using MongoDB, Express.js, React, and Node.js. <br />
            Passionate about creating scalable solutions and learning new technologies. <br />
            I enjoy translating complex ideas into elegant, performant user experiences. <br />
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="px-5 py-2 bg-gradient-to-r from-aqua to-mint text-black font-semibold rounded-full">
              MERN Developer
            </span>
            <span className="px-5 py-2 border border-white/20 text-white rounded-full">
              Open to Collaborate
            </span>
          </div>
        </div>

        {/* Flipping Card */}
        <div className="relative flex justify-center">
          <motion.div
            className="relative w-full max-w-lg h-[400px]"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              className="w-full h-full relative"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full bg-gradient-to-br from-midnight/90 to-navy/80 backdrop-blur-sm border border-mint/20 rounded-2xl overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                 <div className="flex items-center gap-2 p-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-neutral-400">~/portfolio</span>
                </div>
                <button
                  onClick={handleRunCode}
                  className="absolute top-1.5 right-4 px-4 py-2 bg-aqua text-black font-semibold rounded-full shadow hover:bg-mint transition"
                >
                  Run Code
                </button>
              </div>

              {/* Back Side (Terminal) */}
              <div
                className="absolute w-full h-full bg-gradient-to-br from-midnight/90 to-navy/80 backdrop-blur-sm border border-mint/20 rounded-2xl overflow-hidden"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <button
                  onClick={handleRunCode}
                  className="absolute top-1.5 right-4 px-4 py-2 bg-aqua text-black font-semibold rounded-full shadow hover:bg-mint transition"
                >
                  Run Code
                </button>
                <div className="flex items-center gap-2 p-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-neutral-400">~/portfolio</span>
                </div>
                <div className="p-4 font-mono text-sm text-white space-y-1">
                  {displayedLines.map((line, idx) => (
                    <div
                      key={idx}
                      className={`${line.type === "command" ? "text-mint" : "text-white"} ${line.type === "output" ? "mt-1" : ""}`}
                    >
                      {line.text}
                    </div>
                  ))}
                  {lineIndex < terminalLines.length && (
                    <div className={`${terminalLines[lineIndex].type === "command" ? "text-mint" : "text-aqua mt-1"}`}>
                      {currentLine}
                      <span className="animate-pulse">|</span>
                    </div>
                  )}
                  {!isTyping && <div className="text-mint animate-pulse">$ _</div>}
                  {runOutput.map((line, index) => (
                    <div key={`run-${index}`} className="text-aqua mt-2">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Bottom Section */}
<div className="absolute  bottom-1 w-full flex flex-col items-center gap-8  ">
  {/* Tech stack icons */}
      <motion.div
        className="flex gap-8 text-neutral-400 text-5xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 1.2, // delay between icons
            },
          },
        }}
      >
        {techIcons.map((icon, index) => (
          <motion.i
            key={index}
            className={icon}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
        ))}
      </motion.div>

  {/* Scroll down hint */}
  <div className="flex flex-col items-center text-aqua text-xl animate-bounce ">
    {/* <span>Scroll Down</span> */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mt-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

    </section>
  );
};

export default Hero;

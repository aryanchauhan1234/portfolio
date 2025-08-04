import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Hero = () => {

  const [isRunningCode, setIsRunningCode] = useState(false);
const [runOutput, setRunOutput] = useState([]);

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
        }, 1000); // pause before scrolling
      }
    }, 300);
  };


  const navigate = useNavigate();
  const terminalLines = [
    { type: "command", text: "$ i am" },
    { type: "output", text: "ARYAN - MERN Stack Developer" },
    { type: "command", text: "$ ls skills/" },
    { type: "output", text: "MongoDB  Express.js  React.js  Node.js" },
    { type: "command", text: "$ cat passion.txt" },
    { type: "output", text: "Building full-stack web applications ⚡" }
  ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (lineIndex < terminalLines.length) {
      const line = terminalLines[lineIndex].text;

      if (charIndex < line.length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + line[charIndex]);
          setCharIndex(charIndex + 1);
        }, 15); // typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => [
            ...prev,
            { ...terminalLines[lineIndex], text: currentLine }
          ]);
          setCurrentLine("");
          setCharIndex(0);
          setLineIndex(lineIndex + 1);
        }, 400); // delay before next line starts typing
        return () => clearTimeout(timeout);
      }
    } else {
      setIsTyping(false);
    }
  }, [charIndex, lineIndex]);
  return (
    <section id="home" className="relative flex justify-center  py-[12%] overflow-hidden c-space">
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

        <div className="relative">
          <div className="relative w-full h-fit min-h-96 rounded-2xl bg-gradient-to-br from-midnight/90 to-navy/80 backdrop-blur-sm border border-mint/20 overflow-hidden">
            {/* Run Code Button */}
            {/* <button
              onClick={() => {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="absolute top-1.5 right-4 px-4 py-2 bg-aqua text-black font-semibold rounded-full shadow hover:bg-mint transition"
            >
              Run Code
            </button> */}
            <button
              onClick={handleRunCode}
              className="absolute top-1.5 right-4 px-4 py-2 bg-aqua text-black font-semibold rounded-full shadow hover:bg-mint transition"
            >
              Run Code
            </button>
            {/* Terminal Header */}
            <div className="flex items-center gap-2 p-4 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-neutral-400">~/portfolio</span>
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm text-white space-y-1">
  {displayedLines.map((line, idx) => (
    <div
      key={idx}
      className={`${
        line.type === "command" ? "text-mint" : "text-white"
      } ${line.type === "output" ? "mt-1" : ""}`}
    >
      {line.text}
    </div>
  ))}

  {lineIndex < terminalLines.length && (
    <div
      className={`${
        terminalLines[lineIndex].type === "command"
          ? "text-mint"
          : "text-aqua mt-1"
      }`}
    >
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
        </div>
      </div>
    </section>
  );
};

export default Hero;

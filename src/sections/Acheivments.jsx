import React from "react";
import { Star, Medal } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "AI Elective – 10/10 CGPA",
      description:
        "Scored a perfect grade in Artificial Intelligence elective, showcasing strong analytical and programming skills.",
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      img: "assets/ai.jpg",
    //   link: "https://example.com/ai-certificate", // Replace with real link
    },
    {
      title: "Codeforces – 1331 Rating",
      description:
        "Solved 685+ problems and participated in 50+ rated contests, consistently improving problem-solving skills.",
      img: "assets/cf.png",
      link: "https://codeforces.com/profile/THE_ArYaN_CoDeR", // Replace with real CF profile
    },
    {
      title: "LeetCode Achiever – 350+ Problems Solved",
      description:
        "Focused on mastering Data Structures and Algorithms with daily practice and contest participation.",
      img: "assets/leet.png",
      link: "https://leetcode.com/u/Aryan--1--/", // Replace with real LeetCode profile
    },
  ];

  const certificates = [
    {
      title: "Responsive Web Design: freeCodeCamp",
      description: "Completed a comprehensive Responsive Web Design course.",
      icon: <Medal className="w-6 h-6 text-cyan-400" />,
      img: "assets/cert1.png",
      link: "https://www.freecodecamp.org/certification/aryan1234/responsive-web-design", // Replace with real link
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      description:
        "Learned JavaScript Algorithms and Data Structures.",
      icon: <Medal className="w-6 h-6 text-pink-400" />,
      img: "assets/cert2.png",
      link: "https://www.freecodecamp.org/certification/aryan1234/javascript-algorithms-and-data-structures", // Replace with real link
    },
  ];

  return (
    <section className="min-h-screen py-12 px-6 md:px-20 mt-[15%]" id="achievements">
      <h1 className="text-4xl font-bold text-aqua mb-10 text-center">
        Achievements
      </h1>

      {/* Achievements Grid */}
     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
  {achievements.map((item, index) => (
    <div
      key={index}
      className="grid-glass-effect p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
    >
      {item.img && (
        <img
          src={item.img}
          alt={item.title}
          className="w-60 h-60 object-contain mx-auto my-3 mb-[10%]"
        />
      )}
      <div className="flex items-center gap-3 mb-4">
        {item.icon}
        <h2 className="text-lg font-semibold text-white">{item.title}</h2>
      </div>
      <p className="text-gray-300 text-sm mb-3">{item.description}</p>
      <span className="text-xs text-gray-500">{item.year}</span>

      {/* Only the link is clickable */}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-aqua underline text-sm mt-2 inline-block"
        >
          View More →
        </a>
      )}
    </div>
  ))}
</div>


      {/* Certificates Section */}
      <h2 className="text-3xl font-bold text-aqua mb-8 text-center">
        Certificates
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
  {certificates.map((item, index) => (
    <div
      key={index}
      className="grid-glass-effect p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
    >
      {item.img && (
        <img
          src={item.img}
          alt={item.title}
          className="w-60 h-60 object-contain mx-auto my-3 mb-[10%]"
        />
      )}
      <div className="flex items-center gap-3 mb-4">
        {item.icon}
        <h2 className="text-lg font-semibold text-white">{item.title}</h2>
      </div>
      <p className="text-gray-300 text-sm mb-3">{item.description}</p>
      <span className="text-xs text-gray-500">{item.year}</span>

      {/* Only the link is clickable */}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-aqua underline text-sm mt-2 inline-block"
        >
          View More →
        </a>
      )}
    </div>
  ))}
</div>
    </section>
  );
}

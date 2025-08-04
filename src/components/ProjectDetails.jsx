import { motion } from "framer-motion";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto p-4 backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-4 right-4 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="close" />
        </button>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full rounded-t-2xl max-h-[50vh] object-cover"
        />

        {/* Content */}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p
              key={index}
              className="mb-3 font-normal text-neutral-400 text-sm sm:text-base"
            >
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
            {/* Optional Tags */}
            {/* 
            <div className="flex gap-3 flex-wrap">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div> 
            */}

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-white"
            >
              View Project
              <img src="assets/arrow-up.svg" className="size-4" alt="arrow" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;

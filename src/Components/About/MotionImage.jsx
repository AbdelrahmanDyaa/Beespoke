/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const MotionImage = ({ src, alt, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-[600px] object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-8">
        <motion.h1 className="text-5xl md:text-6xl font-bold text-[#8c826d] mb-6 tracking-wide" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          {title}
        </motion.h1>
        <motion.p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default MotionImage;

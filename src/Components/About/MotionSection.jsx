/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const MotionSection = ({ title, content, children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 max-w-4xl mx-auto text-center bg-tan p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl text-espresso mb-6 tracking-wide">{title}</h2>
      <p className="text-lg leading-relaxed">{content}</p>
      {children}
    </motion.section>
  );
};

export default MotionSection;

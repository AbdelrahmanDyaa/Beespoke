import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const InteriorDesign = () => {
  const { t } = useTranslation();

  const steps = [
    { key: "concept_design", description: "concept_design_desc" },
    { key: "rendering_visualization", description: "rendering_visualization_desc" },
    { key: "lighting_design", description: "lighting_design_desc" },
    { key: "shop_drawings_execution", description: "shop_drawings_execution_desc" },
    { key: "woodwork_flooring", description: "woodwork_flooring_desc" },
    { key: "custom_furniture", description: "custom_furniture_desc" }
  ];

  return (
    <div className="bg-[#121212] text-[#e5d5c5] font-oswald min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <motion.img
          src="https://i.ibb.co/fYx1H9Lk/2.jpg"
          alt="Luxury Interior Design"
          className="w-full h-[500px] object-cover brightness-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-[#d1b887] drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("interior_design.title")}
        </motion.h1>
      </div>

      {/* Steps Section */}
      <div className="py-16 px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              className="bg-[#1a1a1a] p-10 rounded-2xl shadow-2xl hover:shadow-[#d1b887] transition-all duration-300 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            >
              <h2 className="text-3xl text-[#d1b887] font-semibold mb-4">
                {t(`interior_design.${step.key}`)}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t(`interior_design.${step.description}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;

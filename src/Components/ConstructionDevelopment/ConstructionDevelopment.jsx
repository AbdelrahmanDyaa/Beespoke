import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ConstructionDevelopment = () => {
  const { t } = useTranslation();

  // Service categories
  const services = [
    "siteDevelopment",
    "structuralCivilWorks",
    "mep",
    "finishingFitOut"
  ];

  return (
    <div className="bg-[#121212] text-[#e5d5c5] font-oswald min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px]">
        <motion.img
          src="https://i.ibb.co/m5LsGMJp/Bespoke-Spaces-Company-Profile-3.jpg"
          alt="Construction Development"
          className="w-full h-full object-cover brightness-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute top-[35%] sm:top-[40%] md:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#d1b887] drop-shadow-lg text-center max-w-[90%]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("constructionDevelopment.title")}
        </motion.h1>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((serviceKey, index) => (
            <motion.div
              key={serviceKey}
              className="bg-[#1a1a1a] p-10 rounded-2xl shadow-2xl hover:shadow-[#8c826d] transition-all duration-300 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl text-[#d1b887] font-semibold mb-4">
                {t(`constructionDevelopment.${serviceKey}.title`)}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t(`constructionDevelopment.${serviceKey}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionDevelopment;

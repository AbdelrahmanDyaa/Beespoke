import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ConstructionDevelopment = () => {
  const { t } = useTranslation();

  // قائمة الخدمات
  const services = [
    "siteDevelopment",
    "structuralCivilWorks",
    "mep",
    "finishingFitOut"
  ];

  return (
    <div className="bg-[#121212] text-[#e5d5c5] font-oswald min-h-screen">
      {/* هيدر الصفحة */}
      <div className="relative w-full h-[450px] md:h-[500px] lg:h-[550px]">
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

      {/* قسم الخدمات بتنسيق الـ Timeline */}
      <div className="py-16 px-6 md:px-20 lg:px-32">
        <div className="relative w-full flex flex-col items-center">
          {/* الخط الزمني الأفقي */}
          <div className="absolute top-0 w-full border-t-2 border-[#d1b887] hidden md:block" />

          <div className="flex flex-col md:flex-row items-start justify-between w-full gap-16 mt-0">
            {services.map((serviceKey, index) => (
              <motion.div
                key={serviceKey}
                className="relative flex flex-col items-center text-center bg-[#1a1a1a] p-6 md:p-8 rounded-2xl shadow-xl w-72 md:w-80 mt-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
              >
                {/* النقطة الدائرية أعلى المربع */}
                <div className="absolute w-10 h-10 bg-[#d1b887] rounded-full top-[-30px] left-1/2 transform -translate-x-1/2 border-4 border-[#d1b887]" />
                
                {/* عنوان الخدمة */}
                <h2 className="text-xl md:text-2xl text-[#d1b887] font-semibold mb-3">
                  {t(`constructionDevelopment.${serviceKey}.title`)}
                </h2>
                
                {/* وصف الخدمة */}
                <p className="text-md text-gray-400 leading-relaxed">
                  {t(`constructionDevelopment.${serviceKey}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionDevelopment;

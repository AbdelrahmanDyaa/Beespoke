import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const heroImage = "https://i.ibb.co/7xZ7hy1j/Bespoke-Spaces-Company-Profile-5.jpg";



const AboutUs = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-[#121212] text-[#e5d5c5] font-oswald min-h-screen py-16 px-6 md:px-20 lg:px-32">
      {/* Hero Section */}
      <section className="text-center mb-20 relative mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
        >
          <motion.img
            src={heroImage}
            alt={t("about.hero_alt")}
            className="w-full h-[600px] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-8">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-[#8c826d] mb-6 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {t("about.title")}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {t("about.description")}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Company Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-4xl mx-auto text-center bg-[#1a1a1a] p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl text-[#8c826d] mb-6 tracking-wide">
          {t("about.company_overview.title")}
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          {t("about.company_overview.short")}
        </p>
        {isExpanded && (
          <div>
            {t("about.company_overview.full", { returnObjects: true }).map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        )}
        <button
          onClick={toggleExpansion}
          className="text-[#8c826d] mt-6 inline-block text-lg font-semibold hover:text-[#bab09b] transition-colors duration-300"
        >
          {isExpanded ? t("about.read_less") : t("about.read_more")}
        </button>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-4xl mx-auto text-center p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl text-[#8c826d] mb-6 tracking-wide">
          {t("about.values.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {t("about.values.items", { returnObjects: true }).map((value, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="bg-[#2a2a2a] text-[#e5d5c5] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
    >
      <h3 className="text-xl font-semibold text-[#8c826d] mb-4 text-center">
        {t(`about.values.labels.${index}`)}
      </h3>
      <p>{value}</p>
    </motion.div>
  ))}
</div>

      </motion.section>

      {/* Mission & Vision Sections */}
      {["mission", "vision"].map((section, index) => (
        <motion.section
          key={index}
          className="mb-16 max-w-4xl mx-auto text-center bg-[#1a1a1a] p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-[#8c826d] mb-6 tracking-wide">
            {t(`about.${section}.title`)}
          </h2>
          <p className="text-lg leading-relaxed">{t(`about.${section}.text`)}</p>
        </motion.section>
      ))}


   {/* our clients */}   
   <section className="mb-10 text-center">
  {/* عنوان القسم */}
  <h2 className="text-4xl text-[#8c826d] mb-12 tracking-wide font-bold uppercase">
    {t("about.clients.title")}
  </h2>

  {/* الشبكة - 4 أعمدة ثابتة */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-6">
    {[
      {
        title: "about.clients.categories.interior_design",
        images: ["https://i.ibb.co/tpq18rbF/image.png", "https://i.ibb.co/nq2p4JTK/word.png"],
      },
      {
        title: "about.clients.categories.real_estate",
        images: ["https://i.ibb.co/XfT4WZD7/realstate.png"],
      },
      {
        title: "about.clients.categories.facility_management",
        images: ["https://i.ibb.co/Y40Kcffg/image.png", "https://i.ibb.co/fYd6g6V2/albani.png"],
      },
      {
        title: "about.clients.categories.construction",
        images: ["https://i.ibb.co/h6vsFHH/rock.png", "https://i.ibb.co/HT0x7gHQ/rimetrica.png"],
      },
    ].map((section, index) => (
      <div key={index} className="text-center">
        {/* عنوان الفئة مع خط سفلي أنيق */}
        <h3 className="text-lg sm:text-xl text-[#8c826d] font-semibold mb-6 relative inline-block after:block after:h-[3px] after:bg-[#8c826d] after:w-full after:mt-2 after:transition-all after:duration-300 after:scale-x-100 hover:after:scale-x-125">
          {t(section.title)}
        </h3>

        {/* عرض الشعارات */}
        <div className="flex flex-wrap justify-center gap-6">
          {section.images.map((image, imgIndex) => (
            <div
              key={imgIndex}
              className="w-24 h-24 p-2 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:opacity-90 rounded-lg bg-[#222]"
            >
              <img
                src={image}
                alt={t(section.title)}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>





    </div>
  );
};

export default AboutUs;

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation(); // Import translation hook

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[#0c0c0c] text-[#e5d5c5] mt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          className="p-12 bg-[#1a1a1a] rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Title */}
          <motion.h3
            className="text-5xl font-bold text-[#f8c069] mb-6 text-center tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t("mazaya_title")}
          </motion.h3>

          {/* Divider */}
          <div className="w-20 h-1 bg-[#f8c069] mx-auto mb-8 rounded-full"></div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <motion.div
              className="w-full flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src="https://i.ibb.co/Lz689HrH/jpg.webp"
                alt="Mazaya Towers"
                className="rounded-xl shadow-md w-full max-w-md"
              />
            </motion.div>

            {/* Right Side - Description */}
            <div>
              <p className="text-lg text-[#dcdcdc] leading-relaxed tracking-wide">
                {t("mazaya_description_1")}
              </p>
              <p className="text-lg text-[#dcdcdc] leading-relaxed tracking-wide mt-4">
                {t("mazaya_description_2")}
              </p>
              <p className="text-lg text-[#dcdcdc] leading-relaxed tracking-wide mt-4">
                {t("mazaya_description_3")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainPage;

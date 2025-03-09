import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#121212] m-8 text-[#e5d5c5] min-h-screen flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg w-full max-w-2xl border border-[#bab09b]"
            >
                <h2 className="text-3xl font-bold text-center mb-4 text-[#8c826d] font-oswald">
                    {t("privacy.title")}
                </h2>
                <p className="text-[#e5d5c5] leading-relaxed">{t("privacy.intro")}</p>

                <h3 className="text-2xl font-semibold mt-4 text-[#8c826d]">
                    {t("privacy.section1.title")}
                </h3>
                <p className="text-[#e5d5c5] leading-relaxed">{t("privacy.section1.description")}</p>

                <h3 className="text-2xl font-semibold mt-4 text-[#8c826d]">
                    {t("privacy.section2.title")}
                </h3>
                <p className="text-[#e5d5c5] leading-relaxed">{t("privacy.section2.description")}</p>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;

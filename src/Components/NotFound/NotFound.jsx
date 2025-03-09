import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#121212] min-h-screen flex items-center justify-center text-[#e5d5c5] p-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg max-w-md text-center border border-[#bab09b]"
            >
                <h1 className="text-6xl font-bold text-[#8c826d] font-oswald">404</h1>
                <h2 className="text-2xl font-semibold mt-4">{t("notFound.title")}</h2>
                <p className="text-[#e5d5c5] mt-2">{t("notFound.message")}</p>
                
                <Link 
                    to="/" 
                    className="mt-6 inline-block bg-[#8c826d] text-[#121212] px-6 py-2 rounded-lg font-semibold hover:bg-[#bab09b] transition"
                >
                    {t("notFound.button")}
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;

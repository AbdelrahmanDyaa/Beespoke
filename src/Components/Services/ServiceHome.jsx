import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const services = [
    { id: 1, src: "https://i.ibb.co/4qtRkwj/Bespoke-Spaces-Company-Profile-2.jpg", key: "services3.real_estate", path: "/services/real_estate_live" },
    { id: 2, src: "https://i.ibb.co/fYx1H9Lk/2.jpg", key: "services3.interior_design3", path: "/services/interior-design" },
    { id: 3, src: "https://i.ibb.co/m5LsGMJp/Bespoke-Spaces-Company-Profile-3.jpg", key: "services3.real_estate_services3", path: "/services/construction-development" },
    { id: 4, src: "https://i.ibb.co/35jqFJhs/Bespoke-Spaces-Company-Profile-4.jpg", key: "services3.interior_design_services3", path: "/services/property_and_facility_management" }
];

const ServicesSlider = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [isRTL, setIsRTL] = useState(i18n.language === "ar");

    useEffect(() => {
        setIsRTL(i18n.language === "ar");
    }, [i18n.language]);

    const handleServiceClick = (path) => {
        navigate(path);
    };

    return (
        <section className="bg-[#121212] text-[#e5d5c5] py-20 px-6 flex justify-center">
            <div className="max-w-7xl w-full text-start relative">
                <h2 className="text-3xl font-oswald mb-6">{t("services3.title")}</h2>
                <Swiper
                    dir={isRTL ? "rtl" : "ltr"} // Enable RTL if Arabic is selected
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation={{ rtl: isRTL }} // Adjust navigation for RTL
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Navigation, Autoplay]}
                    className="w-full"
                >
                    {services.map((service) => (
                        <SwiperSlide key={service.id} className="flex flex-col items-center">
                            <motion.img
                                src={service.src}
                                className="w-full h-64 object-cover shadow-lg rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => handleServiceClick(service.path)}
                            />
                            <div className="text-center mt-4">
                                <h3 className="text-lg font-bold font-oswald text-[#d1b887]">{t(`${service.key}.title`)}</h3>
                                <p className="text-gray-400 text-sm font-playfair">{t(`${service.key}.description`)}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ServicesSlider;

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://i.ibb.co/KzqB3vBR/Screenshot.png",
  "https://i.ibb.co/4ZZBsJCn/Screenshot-344.png",
  "https://i.ibb.co/zTm5Ys0p/Screenshot-343.png",
  "https://i.ibb.co/5xk8fWr9/Screenshot-341.png",
  "https://i.ibb.co/kgpFrMQx/Screenshot-31.png",
];

const ModernApartmentSlider = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-[#0c0c0c] text-[#e5d5c5] py-12 px-6 flex flex-col items-center">
      {/* Title */}
      <h2 className="mt-6 text-4xl font-oswald text-center text-[#f8c069] tracking-wide uppercase pt-12">
        {t("modern_apartment.title")}
      </h2>

      {/* Slider */}
      <div className="w-full max-w-5xl overflow-hidden">
        <Slider {...settings} className="overflow-hidden">
          {images.map((img, index) => (
            <div key={index} className="p-3">
              <div className="relative group">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="h-[250px] w-full object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-10 transition-opacity"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Description with "Read More" button */}
      <p className="text-lg text-[#dcdcdc] leading-relaxed tracking-wide max-w-4xl text-center mt-8">
        {expanded ? t("modern_apartment.description") : `${t("modern_apartment.description").substring(0, 200)}...`}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 px-4 py-2 bg-[#f8c069] text-[#0c0c0c] rounded-lg text-sm font-semibold hover:bg-[#e0a856] transition"
      >
        {expanded ? t("modern_apartment.read_less") : t("modern_apartment.read_more")}
      </button>
    </section>
  );
};

export default ModernApartmentSlider;

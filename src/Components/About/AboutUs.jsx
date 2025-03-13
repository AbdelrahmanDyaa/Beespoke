import { useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";

// Lazy Load Heavy Components
const MotionSection = lazy(() => import("./MotionSection"));
const MotionImage = lazy(() => import("./MotionImage"));

const heroImage = "https://i.ibb.co/7xZ7hy1j/Bespoke-Spaces-Company-Profile-5.jpg";

const AboutUs = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-[#121212] text-[#e5d5c5] font-oswald min-h-screen py-16 px-6 md:px-20 lg:px-32">

      {/* Hero Section */}
      <section className="text-center mb-20 relative mt-10">
        <Suspense fallback={<div>Loading...</div>}>
          <MotionImage src={heroImage} alt={t("about.hero_alt")} title={t("about.title")} description={t("about.description")} />
        </Suspense>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <MotionSection title={t("about.company_overview.title")} content={t("about.company_overview.short")}>
          {isExpanded &&
            t("about.company_overview.full", { returnObjects: true }).map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed mb-6">{paragraph}</p>
            ))}
        </MotionSection>
      </Suspense>

      {/* Read More / Read Less Button - Placed Outside the Motion Section */}
      <div className="text-center mb-16">
        <button
          onClick={toggleExpansion}
          className="text-[#8c826d] text-lg font-semibold hover:text-[#bab09b] transition-colors duration-300 underline"
        >
          {isExpanded ? t("about.read_less") : t("about.read_more")}
        </button>
      </div>


      {/* Values Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <MotionSection title={t("about.values.title")}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t("about.values.items", { returnObjects: true }).map((value, index) => (
              <div key={index} className="bg-[#2a2a2a] text-[#e5d5c5] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-[#8c826d] mb-4 text-center">
                  {t(`about.values.labels.${index}`)}
                </h3>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </MotionSection>
      </Suspense>

      {/* Mission & Vision Sections */}
      {["mission", "vision"].map((section, index) => (
        <Suspense key={index} fallback={<div>Loading...</div>}>
          <MotionSection title={t(`about.${section}.title`)} content={t(`about.${section}.text`)} />
        </Suspense>
      ))}

      {/* Our Clients Section */}
      <section className="mb-10 text-center">
        <h2 className="text-4xl text-[#8c826d] mb-12 tracking-wide font-bold uppercase">
          {t("about.clients.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-6">
          {[
            { title: "about.clients.categories.interior_design", images: ["https://i.ibb.co/tpq18rbF/image.png", "https://i.ibb.co/nq2p4JTK/word.png"] },
            { title: "about.clients.categories.real_estate", images: ["https://i.ibb.co/XfT4WZD7/realstate.png"] },
            { title: "about.clients.categories.facility_management", images: ["https://i.ibb.co/Y40Kcffg/image.png", "https://i.ibb.co/fYd6g6V2/albani.png"] },
            { title: "about.clients.categories.construction", images: ["https://i.ibb.co/h6vsFHH/rock.png", "https://i.ibb.co/HT0x7gHQ/rimetrica.png"] },
          ].map((section, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg sm:text-xl text-[#8c826d] font-semibold mb-6 relative inline-block">
                {t(section.title)}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {section.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="w-24 h-24 p-2 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:opacity-90 rounded-lg bg-[#222]">
                    <img src={image} alt={t(section.title)} className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
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

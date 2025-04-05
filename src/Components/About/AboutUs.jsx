import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";

// Lazy Load Heavy Components
const MotionSection = lazy(() => import("./MotionSection"));
const MotionImage = lazy(() => import("./MotionImage"));

const heroImage = "https://i.ibb.co/7xZ7hy1j/Bespoke-Spaces-Company-Profile-5.jpg";

const AboutUs = () => {
  const { t } = useTranslation();

  const overviewPoints = [
    t("about.company_overview.points.0"),
    t("about.company_overview.points.1"),
    t("about.company_overview.points.2"),
    t("about.company_overview.points.3"),
    t("about.company_overview.points.4"),
  ];

  return (
    <div className="bg-dutchWhite text-darkBrown font-oswald min-h-screen py-16 px-6 md:px-20 lg:px-32">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="text-center mb-20 relative mt-10">
        <h1 className="text-5xl md:text-6xl font-bold text-espresso mb-10">
          Bespoke Spaces
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <MotionImage
            src={heroImage}
            alt={t("about.hero_alt")}
            className="rounded-xl"
          />
        </Suspense>
      </section>


      {/* Company Overview Section with MotionSection */}
      <Suspense fallback={<div>Loading...</div>}>
        <MotionSection title={t("about.company_overview.title")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {overviewPoints.map((point, index) => (
              <div key={index} className="relative pl-6">
                <div className="absolute -left-1 top-1 text-caféAuLait text-3xl font-bold">
                  {index + 1}.
                </div>
                <div className="bg-khakiWeb/40 backdrop-blur-md rounded-2xl p-6 text-darkBrown text-lg leading-relaxed hover:scale-[1.02] transition-transform duration-300">
                  {point}
                </div>
              </div>
            ))}
          </div>
        </MotionSection>
      </Suspense>


      {/* Our Clients Section */}
      <section className="mb-10 text-center">
        <h2 className="text-4xl text-espresso mb-12 tracking-wide font-bold uppercase">
          {t("about.clients.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-6">
          {[
            {
              title: "about.clients.categories.interior_design",
              images: [
                "https://i.ibb.co/tpq18rbF/image.png",
                "https://i.ibb.co/nq2p4JTK/word.png",
              ],
            },
            {
              title: "about.clients.categories.real_estate",
              images: ["https://i.ibb.co/XfT4WZD7/realstate.png"],
            },
            {
              title: "about.clients.categories.facility_management",
              images: [
                "https://i.ibb.co/Y40Kcffg/image.png",
                "https://i.ibb.co/fYd6g6V2/albani.png",
              ],
            },
            {
              title: "about.clients.categories.construction",
              images: [
                "https://i.ibb.co/h6vsFHH/rock.png",
                "https://i.ibb.co/HT0x7gHQ/rimetrica.png",
              ],
            },
          ].map((section, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg sm:text-xl text-darkBrown font-semibold mb-6 relative inline-block">
                {t(section.title)}
              </h3>
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

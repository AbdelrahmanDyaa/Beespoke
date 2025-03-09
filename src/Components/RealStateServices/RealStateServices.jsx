import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const RealEstateServices = () => {
  const { t } = useTranslation();

  // Service categories
  const services = [
    { key: "investment_advisory", description: "investment_advisory_desc" },
    { key: "property_acquisition", description: "property_acquisition_desc" },
    { key: "sales_transactions", description: "sales_transactions_desc" },
    { key: "leasing_tenant_management", description: "leasing_tenant_management_desc" }
  ];

  return (
    <div className="bg-[#121212] text-[#e5d5c5] font-oswald min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <motion.img
          src="https://i.ibb.co/4qtRkwj/Bespoke-Spaces-Company-Profile-2.jpg"
          alt="Luxury Real Estate"
          className="w-full h-[450px] object-cover brightness-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-[#d1b887] drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("real_estate_services.title")}
        </motion.h1>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              className="bg-[#1a1a1a] p-10 rounded-2xl shadow-2xl hover:shadow-[#d1b887] transition-all duration-300 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            >
              <h2 className="text-3xl text-[#d1b887] font-semibold mb-4">
                {t(`real_estate_services.${service.key}`)}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t(`real_estate_services.${service.description}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstateServices;

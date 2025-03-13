import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PropertyFacilityManagement = () => {
  const { t } = useTranslation();

  // Service categories
  const categories = [
    "assetLeaseManagement",
    "maintenanceOperations",
    "securityRiskManagement",
    "energyEfficiency"
  ];

  return (
    <div className="bg-[#121212] text-[#e5d5c5] font-oswald min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <motion.img
          src="https://i.ibb.co/35jqFJhs/Bespoke-Spaces-Company-Profile-4.jpg"
          alt="Property & Facility Management"
          className="w-full h-[400px] object-cover brightness-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-[#e5d5c5] drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("propertyFacilityManagement.title")}
        </motion.h1>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((key, index) => (
            <motion.div
              key={key}
              className="bg-[#1a1a1a] p-10 rounded-2xl shadow-2xl hover:shadow-[#8c826d] transition-all duration-300 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            >
              <h2 className="text-3xl text-[#d1b887] font-semibold mb-4">
                {t(`propertyFacilityManagement.${key}.title`)}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t(`propertyFacilityManagement.${key}.description`)}
              </p>

              {/* Maintenance List (if applicable) */}
              {key === "maintenanceOperations" && (
  <ul className="mt-6 text-left text-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 list-[square] pl-6">
    {[
      "elevators",
      "generators",
      "hvac",
      "fireSafety",
      "plumbing",
      "electrical",
      "cctv",
      "wasteManagement",
      "security",
      "cleaning",
      "pestControl"
    ].map((item) => (
      <li key={item} className="hover:text-[#d1b887] transition list-inside">
        {t(`propertyFacilityManagement.maintenanceOperations.list.${item}`)}
      </li>
    ))}
  </ul>
)}


            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyFacilityManagement;

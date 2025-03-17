import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const PropertyFacilityManagement = () => {
  const { t } = useTranslation();
  const [showFullList, setShowFullList] = useState(false); // ✅ تعريف حالة العرض

  // قائمة الخدمات
  const services = [
    { key: "assetLeaseManagement", description: "assetLeaseManagement_desc" },
    { key: "maintenanceOperations", description: "maintenanceOperations_desc", maintenanceList: [
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
    ]},
    { key: "securityRiskManagement", description: "securityRiskManagement_desc" },
    { key: "energyEfficiency", description: "energyEfficiency_desc" }
  ];

  return (
    <div className="bg-[#121212] text-[#e5d5c5] font-oswald min-h-screen">
      {/* هيدر الصفحة */}
      <div className="relative w-full h-[450px] md:h-[500px] lg:h-[550px]">
        <motion.img
          src="https://i.ibb.co/35jqFJhs/Bespoke-Spaces-Company-Profile-4.jpg"
          alt="Property & Facility Management"
          className="w-full h-full object-cover brightness-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute top-[35%] sm:top-[40%] md:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#d1b887] drop-shadow-lg text-center max-w-[90%]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("propertyFacilityManagement.title")}
        </motion.h1>
      </div>

      {/* قسم الخدمات على شكل Timeline */}
      <div className="py-16 px-6 md:px-20 lg:px-32">
        <div className="relative w-full flex flex-col items-center">
          {/* الخط الزمني الأفقي */}
          <div className="absolute top-0 w-full border-t-2 border-[#d1b887] hidden md:block" />

          <div className="flex flex-col md:flex-row items-start justify-between w-full gap-16 mt-0">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                className="relative flex flex-col items-center text-center bg-[#1a1a1a] p-6 md:p-8 rounded-2xl shadow-xl w-72 md:w-80 mt-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
              >
                {/* النقطة الدائرية أعلى المربع */}
                <div className="absolute w-10 h-10 bg-[#d1b887] rounded-full top-[-30px] left-1/2 transform -translate-x-1/2 border-4 border-[#d1b887]" />
                
                {/* عنوان الخدمة */}
                <h2 className="text-xl md:text-2xl text-[#d1b887] font-semibold mb-3">
                  {t(`propertyFacilityManagement.${service.key}.title`)}
                </h2>
                
                {/* وصف الخدمة */}
                <p className="text-md text-gray-400 leading-relaxed">
                  {t(`propertyFacilityManagement.${service.key}.description`)}
                </p>

                {/* قائمة الصيانة (إذا كانت الخدمة هي "maintenanceOperations") */}


                {service.maintenanceList && (
  <div className="mt-4 text-left text-gray-300">
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-6">
      {service.maintenanceList
        .slice(0, showFullList ? service.maintenanceList.length : 4)
        .map((item) => (
          <li key={item} className="hover:text-[#d1b887] transition">
            {t(`propertyFacilityManagement.maintenanceOperations.list.${item}`)}
          </li>
        ))}
    </ul>

    {service.maintenanceList.length > 4 && (
      <div className="mt-4 flex justify-center">
        <button 
          onClick={() => setShowFullList(!showFullList)}
          className="px-3 py-1 border border-[#d1b887] text-[#d1b887] text-sm rounded-full 
          hover:bg-[#d1b88730] transition duration-300"
        >
          {showFullList ? (
            <>
              <span className="text-base">−</span> {t("Show less")}
            </>
          ) : (
            <>
              <span className="text-base">+</span> {t("Show more")}
            </>
          )}
        </button>
      </div>
    )}
  </div>
)}



              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFacilityManagement;

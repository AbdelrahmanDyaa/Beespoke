import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const projects = [
    { 
        id: 1, 
        title: "mazaya_towers", // Translation key instead of hardcoded text
        image: "https://i.ibb.co/Lz689HrH/jpg.webp",
    },
    { 
        id: 2, 
        title: "Al Sulaymaniah Villa", 
        image: "https://i.ibb.co/m5hqLdt5/Screenshot-342.png",
    },
];

const ProjectsSection = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); // Import translation hook

    return (
        <section className="bg-[#0c0c0c] text-[#e5d5c5] py-20 px-6 flex justify-center mt-12">
            <div className="max-w-7xl w-full">
                {/* Header */}
                <motion.h2
                    className="text-4xl font-oswald mb-12 text-center text-[#e5d5c5] tracking-wide uppercase"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {t("projects_title")}
                </motion.h2>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
                    }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="cursor-pointer bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                            onClick={() => navigate(`/projects/${project.id}`)}
                        >
                            {/* Image */}
                            <motion.img
                                src={project.image}
                                alt={t(project.title)}
                                className="w-full h-[350px] object-cover rounded-t-2xl transition-all duration-300 hover:brightness-90"
                            />

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold font-oswald text-[#f1f1f1] transition-all duration-300 hover:text-[#e5d5c5]">
                                    {t(project.title)}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;

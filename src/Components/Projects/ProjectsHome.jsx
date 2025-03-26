import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const projects = [
    { id: 1, title: "mazaya towers", category: "commercial", image: "https://i.ibb.co/Lz689HrH/jpg.webp" },
    { id: 2, title: "Al Sulaymaniah Villa", category: "residential", image: "https://i.ibb.co/m5hqLdt5/Screenshot-342.png" },
];

const ProjectsSection = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <section className="bg-[#0c0c0c] text-[#e5d5c5] py-20 px-6 flex justify-center">
            <div className="max-w-7xl w-full">
                <h2 className="text-3xl font-oswald mb-6 uppercase text-start">{t("projects.title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="text-start cursor-pointer"
                            onClick={() => navigate(`/projects/${project.id}`)}
                        >
                            <img 
                                src={project.image} 
                                className="w-full h-[250px] object-cover rounded-lg shadow-md transition-transform hover:scale-105" 
                                alt={t(`projects.items.${project.id}.title`)}
                            />
                            <h3 className="text-lg font-bold mt-4 font-oswald">{t(`projects.items.${project.id}.title`)}</h3>
                            <p className="text-sm text-[#cfcfcf]">{t(`projects.items.${project.id}.category`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
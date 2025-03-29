/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ComplainForm = () => {
    const { t } = useTranslation();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [location, setLocation] = useState("");
    const [service, setService] = useState("");
    const [description, setDescription] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!firstName.trim()) newErrors.firstName = t("complain.errors.first_name_required");
        if (!lastName.trim()) newErrors.lastName = t("complain.errors.last_name_required");
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = t("complain.errors.invalid_email");
        }
        if (!phone.trim() || !/^\d{11}$/.test(phone)) {
            newErrors.phone = t("complain.errors.invalid_phone");
        }
        if (!country.trim()) newErrors.country = t("complain.errors.country_required");
        if (!location.trim()) newErrors.location = t("complain.errors.location_required");
        if (!service.trim()) newErrors.service = t("complain.errors.service_required");
        if (!description.trim()) newErrors.description = t("complain.errors.description_required");

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const templateParams = {
                firstName,
                lastName,
                email,
                phone,
                country,
                location,
                service,
                description
            };

            emailjs.send(
                "service_sb5lf0w",
                "template_xxxrppr",
                templateParams,
                "lhGvA_l5Z6vT_Pf3f"
            )
                .then(() => setSubmitted(true))
                .catch((error) => console.error("Failed to send email:", error));
        }
    };

    return (
        <div className="bg-[#121212] min-h-screen flex items-center justify-center p-6 mt-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#1a1a1a] p-10 rounded-2xl shadow-xl w-full max-w-xl border border-[#C8AD7E]"
            >
                <h2 className="text-3xl font-bold text-center mb-6 text-[#C8AD7E]">{t("complain.title")}</h2>
                {!submitted ? (
                    <motion.form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder={t("complain.first_name")} className="input-field w-full p-3 border border-[#C8AD7E] rounded-lg bg-[#121212] text-white" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder={t("complain.last_name")} className="input-field w-full p-3 border border-[#C8AD7E] rounded-lg bg-[#121212] text-white" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <input type="email" placeholder={t("complain.email")} className="input-field w-full p-3 border border-[#C8AD7E] rounded-lg bg-[#121212] text-white" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder={t("complain.phone")} className="input-field w-full p-3 border border-[#C8AD7E] rounded-lg bg-[#121212] text-white" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input type="text" placeholder={t("complain.country")} className="input-field w-full p-3 border border-[#C8AD7E] rounded-lg bg-[#121212] text-white" value={country} onChange={(e) => setCountry(e.target.value)} />
                        <input type="text" placeholder={t("complain.location")} className="input-field w-full p-3 border border-[#C8AD7E] rounded-lg bg-[#121212] text-white" value={location} onChange={(e) => setLocation(e.target.value)} />
                        <select className="input-field w-full p-3 border border-[#C8AD7E] rounded-lg bg-[#121212] text-white" value={service} onChange={(e) => setService(e.target.value)}>
                            <option value="">{t("complain.select_service")}</option>
                            <option value="elevators">{t("complain.elevators")}</option>
                            <option value="hvac">{t("complain.hvac")}</option>
                            <option value="plumbing">{t("complain.plumbing")}</option>
                            <option value="cctv">{t("complain.cctv")}</option>
                            <option value="pest_control">{t("complain.pest_control")}</option>
                            <option value="security">{t("complain.security")}</option>
                            <option value="generators">{t("complain.generators")}</option>
                            <option value="fire_safety_systems">{t("complain.fire_safety_systems")}</option>
                            <option value="electrical_works">{t("complain.electrical_works")}</option>
                            <option value="waste_management">{t("complain.waste_management")}</option>
                            <option value="cleaning_services">{t("complain.cleaning_services")}</option>
                            <option value="other">{t("complain.other")}</option>


                        </select>
                        <textarea placeholder={t("complain.description")} className="input-field w-full p-3 border border-[#C8AD7E] rounded-lg bg-[#121212] text-white h-32" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="mt-4 px-6 py-3 bg-[#C8AD7E] text-black font-semibold rounded-xl border-2 border-[#C8AD7E] hover:bg-[#D1BB91]"
                        >
                            {t("complain.submit")}
                        </motion.button>
                    </motion.form>
                ) : (
                    <p className="text-green-600 text-center font-semibold">{t("complain.success")}</p>
                )}
            </motion.div>
        </div>
    );
};

export default ComplainForm;
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ComplainForm = () => {
    const { t } = useTranslation(); // Translation hook
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [complaint, setComplaint] = useState("");
    const [attachment, setAttachment] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!name.trim()) newErrors.name = t("complain.errors.name_required");
        if (!email.trim()) {
            newErrors.email = t("complain.errors.email_required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = t("complain.errors.invalid_email");
        }
        if (!phone.trim()) {
            newErrors.phone = t("complain.errors.phone_required");
        } else if (!/^\d{11}$/.test(phone)) {
            newErrors.phone = t("complain.errors.invalid_phone");
        }
        if (!subject.trim()) newErrors.subject = t("complain.errors.subject_required");
        if (!complaint.trim()) newErrors.complaint = t("complain.errors.complaint_required");
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const templateParams = {
                name,
                email,
                phone,
                subject,
                complaint
            };
            
            emailjs.send(
                "service_sb5lf0w", // Replace with your EmailJS Service ID
                "template_xxxrppr", // Replace with your EmailJS Template ID
                templateParams,
                "lhGvA_l5Z6vT_Pf3f" // Replace with your EmailJS Public Key
            )
            .then((response) => {
                console.log("Email sent successfully!", response);
                setSubmitted(true);
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
            });
        }
    };

    return (
        <div className="bg-[#121212] m-8 text-[#e5d5c5] h-auto min-h-screen flex items-center justify-center p-6 pt-12 overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg w-full max-w-md border border-[#bab09b]"
            >
                <h2 className="text-3xl font-bold text-center mb-4 text-[#8c826d] font-oswald">{t("complain.title")}</h2>
                {!submitted ? (
                    <motion.form onSubmit={handleSubmit} className="space-y-4">
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="text"
                            placeholder={t("complain.name")}
                            className="w-full border border-[#bab09b] bg-[#0c0c0c] p-3 text-white placeholder-gray-500 rounded-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="email"
                            placeholder={t("complain.email")}
                            className="w-full border border-[#bab09b] bg-[#0c0c0c] p-3 text-white placeholder-gray-500 rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="text"
                            placeholder={t("complain.phone")}
                            className="w-full border border-[#bab09b] bg-[#0c0c0c] p-3 text-white placeholder-gray-500 rounded-lg"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="text"
                            placeholder={t("complain.subject")}
                            className="w-full border border-[#bab09b] bg-[#0c0c0c] p-3 text-white placeholder-gray-500 rounded-lg"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}

                        <motion.textarea
                            whileFocus={{ scale: 1.02 }}
                            placeholder={t("complain.complaint")}
                            className="w-full border border-[#bab09b] bg-[#0c0c0c] p-3 text-white placeholder-gray-500 h-32 rounded-lg"
                            value={complaint}
                            onChange={(e) => setComplaint(e.target.value)}
                        ></motion.textarea>
                        {errors.complaint && <p className="text-red-500 text-sm">{errors.complaint}</p>}

                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="file"
                            className="w-full border border-[#bab09b] bg-[#0c0c0c] p-3 text-white rounded-lg"
                            onChange={(e) => setAttachment(e.target.files[0])}
                        />

                        <div className="flex items-center">
                            <input type="checkbox" id="terms" className="mr-2" />
                            <label htmlFor="terms" className="text-sm">
                                {t("complain.terms")}
                            </label>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="inline-block mt-6 px-8 py-3 bg-[#bab09b] text-black font-semibold transition border-2 border-[#bab09b] font-playfair hover:bg-[#8c826d] hover:border-[#8c826d] rounded-lg"
                        >
                            {t("complain.submit")}
                        </motion.button>
                    </motion.form>
                ) : (
                    <p className="text-green-500 text-center font-semibold">{t("complain.success")}</p>
                )}
            </motion.div>
        </div>
    );
};

export default ComplainForm;

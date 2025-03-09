import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation(); // Hook for translations

  return (
    <div>
      {/* Full-width Banner Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <img
          src="https://i.ibb.co/bRqrfYkP/DSC00461.jpg"
          alt="Contact Banner"
          className="w-full h-[450px] object-cover"
        />
      </motion.div>

      {/* Contact Section */}
      <div className="bg-[#121212] text-[#e5d5c5] py-20 px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl w-full grid md:grid-cols-2 gap-12"
        >
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14944280.62722007!2d55.72943211574409!3d23.87166907340386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2z2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1740669498824!5m2!1sar!2seg"
            
              width={600} height={550} 
              style={{ border: 0 }}
               allowFullScreen 
               loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
          </motion.div>


          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-4xl font-oswald font-bold mb-6 text-[#8c826d]">
              {t("contact.title")}
            </h2>
            <p className="mb-2">
              <strong>{t("contact.addressLabel")}:</strong> Uthman Al-Qadi, 12393 Riyadh, Saudi Arabia
            </p>
            <p className="mb-2">
              <strong>{t("contact.callLabel")}:</strong> +966 55 8132 555
            </p>
            <p className="mb-2">
              <strong>{t("contact.emailLabel")}:</strong> info@bespokehomes.art
            </p>
            

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder={t("contact.namePlaceholder")}
                className="w-full border border-[#bab09b] bg-[#0c0c0c] p-3 text-white placeholder-gray-500 rounded-lg"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                className="w-full border border-[#bab09b] bg-[#0c0c0c] p-3 text-white placeholder-gray-500 rounded-lg"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder={t("contact.subjectPlaceholder")}
                className="w-full border border-[#bab09b] bg-[#0c0c0c] p-3 text-white placeholder-gray-500 rounded-lg"
              />
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder={t("contact.messagePlaceholder")}
                className="w-full border border-[#bab09b] bg-[#0c0c0c] p-3 text-white placeholder-gray-500 h-32 rounded-lg"
              ></motion.textarea>

              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-sm">
                  {t("contact.terms")}{" "}
                  <span className="font-bold">{t("contact.termsConditions")}</span>
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-6 px-8 py-3 bg-[#bab09b] text-black font-semibold transition border-2 border-[#bab09b] font-playfair hover:bg-[#8c826d] hover:border-[#8c826d] rounded-lg"
              >
                {t("contact.sendButton")}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

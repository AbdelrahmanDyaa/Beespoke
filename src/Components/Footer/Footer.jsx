import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        
        <footer className="bg-[#0C0C0C] text-[#bab09b] py-12 px-8 font-oswald">
                        <hr className="border-[#8c826d] my-8 opacity-30" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                {/* About Section */}
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-semibold mb-4 text-[#8c826d]">{t("footer.about_us")}</h3>
                    <p className="text-[#bab09b] leading-relaxed">{t("footer.about_us_text")}</p>
                    <Link to="/about-us" className="mt-3 inline-block text-[#8c826d] hover:underline">
                        {t("footer.learn_more")}
                    </Link>
                </div>

                {/* Contact Section */}
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-semibold mb-4 text-[#8c826d]">{t("footer.contact_us")}</h3>
                    <p className="text-[#bab09b]">{t("footer.email")}: info@bespokehomes.art</p>
                    <p className="text-[#bab09b]">{t("footer.phone")}: +966 55 8132 555</p>

                    <Link to="/contact-us" className="mt-3 inline-block text-[#8c826d] hover:underline">
                        {t("footer.get_in_touch")}
                    </Link>
                </div>

                {/* Information Section */}
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-semibold mb-4 text-[#8c826d]">{t("footer.information")}</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/privacy-policy" className="text-[#bab09b] hover:text-[#8c826d] transition">
                                {t("footer.privacy_policy")}
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms-conditions" className="text-[#bab09b] hover:text-[#8c826d] transition">
                                {t("footer.terms_conditions")}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>



            {/* Footer Bottom */}
            <div className="max-w-7xl mx-auto border-t border-[#8c826d] mt-8 py-4 text-center">
                <p className="text-sm text-[#bab09b]">
                    &copy; {new Date().getFullYear()} Bespoke Homes. {t("footer.rights_reserved")}
                </p>
            </div>




        </footer>
    );
};

export default Footer;

import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FeedbackIcon from "../Feedback/FeedbackIcon";

const Layout = () => {
    const { i18n } = useTranslation();

    // Set direction based on language
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    return (
        <div className="bg-black text-white">
            <Navbar />
            <Outlet />
            <FeedbackIcon/>
            <Footer />
        </div>
    );
};

export default Layout;

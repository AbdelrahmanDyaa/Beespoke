import { useLocation, useNavigate } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";

const FeedbackIcon = () => {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname === "/feedback") return null;

    return (
        <button
            onClick={() => navigate("/feedback")}
            className="fixed bottom-5 right-5 bg-[#bab09b] text-black p-4 rounded-full shadow-lg cursor-pointer transition hover:bg-[#8c826d]"
        >
            <FaExclamationCircle size={24} />
        </button>
    );
};

export default FeedbackIcon;


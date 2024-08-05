import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import isAuthenticated from "../../utils/auth";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!isAuthenticated()) {
			navigate("/login");
		}
	}, [navigate, isAuthenticated]);

	return children;
};

export default ProtectedRoute; 
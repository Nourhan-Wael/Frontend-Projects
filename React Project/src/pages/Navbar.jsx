import React from "react";
import useLogout from "../components/Authentication/UseLogout";

const Navbar = () => {
	const { logout } = useLogout();

	return (
		<nav>
			{/* Other navigation items */}
			<button onClick={logout}>Logout</button>
		</nav>
	);
};

export default Navbar;

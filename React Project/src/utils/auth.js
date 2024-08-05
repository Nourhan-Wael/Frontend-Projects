import axios from "axios";

const API_URL = "http://localhost:3001"; // Replace with your JSON Server URL

const loginUser = async (credentials) => {
	try {
		const response = await axios.post(`${API_URL}/login`, credentials);
		// Handle successful login, store token or user data
		return response.data;
	} catch (error) {
		// Handle login error
		throw error;
	}
};

const registerUser = async (userData) => {
	try {
		const response = await axios.post(`${API_URL}/users`, userData);
		// Handle successful registration
		return response.data;
	} catch (error) {
		// Handle registration error
		throw error;
	}
};

export { loginUser, registerUser };

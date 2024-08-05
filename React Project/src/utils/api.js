import axios from "axios";

const API_URL = "http://localhost:3001/tasks";

const createTask = async (taskData) => {
	try {
		const response = await axios.post(API_URL, taskData);
		return response.data;
	} catch (error) {
		throw error;
	}
};
const updateTask = async (taskId, updatedTaskData) => {
	try {
		const response = await axios.put(`${API_URL}/${taskId}`, updatedTaskData);
		return response.data;
	} catch (error) {
		throw error;
	}
};
const deleteTask = async (taskId) => {
	try {
		await axios.delete(`${API_URL}/${taskId}`);
	} catch (error) {
		throw error;
	}
};
const toggleTaskStatus = async (taskId) => {
	try {
		const response = await axios.put(`${API_URL}/${taskId}`, {
			status: "completed",
		}); // Or 'pending'
		return response.data;
	} catch (error) {
		throw error;
	}
};

export default { createTask, updateTask,deleteTask ,toggleTaskStatus};

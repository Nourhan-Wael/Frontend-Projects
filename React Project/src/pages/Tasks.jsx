import React, { useState, useEffect } from "react";
import TaskList from "../components/Task/TaskList";
import TaskForm from "../components/Task/TaskForm";
// import TaskFilterAndSort from "./TaskFilterAndSort";

const Dashboard = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		// Fetch tasks from API
		const fetchTasks = async () => {
			try {
				const response = await fetch("/api/tasks"); // Replace with your API endpoint
				const data = await response.json();
				setTasks(data);
			} catch (error) {
				console.error("Error fetching tasks:", error);
			}
		};

		fetchTasks();
	}, []);

	const handleCreateTask = async (taskData) => {
		// Create task API call
		setTasks([...tasks, taskData]); // Optimistic update
	};

	const handleDeleteTask = async (taskId) => {
		// Delete task API call
		setTasks(tasks.filter((task) => task.id !== taskId));
	};

	const handleToggleTask = async (taskId) => {
		// Toggle task status API call
		setTasks(
			tasks.map((task) =>
				task.id === taskId
					? {
							...task,
							status: task.status === "completed" ? "pending" : "completed",
					  }
					: task
			)
		);
	};

	const handleUpdateTask = async (updatedTask) => {
		// Update task API call
		setTasks(
			tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
		);
	};

	const handleFilter = (filter) => {
		// Filter tasks based on filter criteria
	};

	const handleSort = (sort) => {
		// Sort tasks based on sort criteria
	};

	return (
		<div>
			<h1>Your Tasks</h1>
			<TaskForm onSubmit={handleCreateTask} />
			{/* <TaskFilterAndSort onFilter={handleFilter} onSort={handleSort} /> */}
			<TaskList
				tasks={tasks}
				onDelete={handleDeleteTask}
				onToggle={handleToggleTask}
				onEdit={handleUpdateTask}
			/>
		</div>
	);
};

export default Dashboard;

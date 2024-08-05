import React, { useState } from "react";
import TaskForm from "./TaskForm";

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
	const [isEditing, setIsEditing] = useState(null);

	const handleEditTask = (task) => {
		setIsEditing(task.id);
	};

	const handleSaveTask = async (updatedTask) => {
		// Call API to update the task
		await onEdit(updatedTask);
		setIsEditing(null);
	};

	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					{isEditing === task.id ? (
						<TaskForm initialValues={task} onSubmit={handleSaveTask} />
					) : (
						<div>
							{/* Display task details */}
							<button onClick={() => handleEditTask(task)}>Edit</button>
							<button onClick={() => onDelete(task.id)}>Delete</button>
							<button onClick={() => onToggle(task.id)}>Toggle</button>
						</div>
					)}
				</li>
			))}
		</ul>
	);
};

export default TaskList;

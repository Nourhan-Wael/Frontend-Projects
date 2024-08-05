import React from "react";

const TaskItem = ({ task, onDelete, onToggle }) => {
	return (
		<div className="task-item">
			{/* Task details */}
			<button onClick={() => onDelete(task.id)}>Delete</button>
			<button onClick={() => onToggle(task.id)}>
				{task.status === "completed" ? "Mark as Pending" : "Mark as Completed"}
			</button>
		</div>
	);
};

export default TaskItem;

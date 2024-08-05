import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					<TaskItem
						task={task}
						onDelete={onDelete}
						onToggle={onToggle}
						onEdit={onEdit}
					/>
				</li>
			))}
		</ul>
	);
};

export default TaskList;

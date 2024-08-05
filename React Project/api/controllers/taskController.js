import Task, { find, findByIdAndUpdate, findByIdAndDelete } from "../models/task";

const getTasks = async (req, res) => {
	try {
		const tasks = await find({ userId: req.user.id });
		res.json(tasks);
	} catch (error) {
		res.status(500).json({ message: "Error fetching tasks" });
	}
};

const createTask = async (req, res) => {
	try {
		const { title, description, dueDate, priority } = req.body;
		const userId = req.user.id;

		const newTask = new Task({ title, description, dueDate, priority, userId });
		const savedTask = await newTask.save();

		res.status(201).json(savedTask);
	} catch (error) {
		res.status(500).json({ message: "Error creating task" });
	}
};

const updateTask = async (req, res) => {
	try {
		const { id } = req.params;
		const { title, description, dueDate, priority, completed } = req.body;

		const task = await findByIdAndUpdate(
			id,
			{ title, description, dueDate, priority, completed },
			{ new: true }
		);

		if (!task) {
			return res.status(404).json({ message: "Task not found" });
		}

		res.json(task);
	} catch (error) {
		res.status(500).json({ message: "Error updating task" });
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;

		const task = await findByIdAndDelete(id);

		if (!task) {
			return res.status(404).json({ message: "Task not found" });
		}

		res.json({ message: "Task deleted" });
	} catch (error) {
		res.status(500).json({ message: "Error deleting task" });
	}
};

export default {
	getTasks,
	createTask,
	updateTask,
	deleteTask,
};

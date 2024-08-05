app.put("/tasks/:id", verifyToken, async (req, res) => {
	const { id } = req.params;
	const { title, description, dueDate, priority, completed } = req.body;

	const task = await Task.findByIdAndUpdate(
		id,
		{ title, description, dueDate, priority, completed },
		{ new: true }
	);

	if (!task) {
		return res.status(404).json({ message: "Task not found" });
	}

	res.json(task);
});

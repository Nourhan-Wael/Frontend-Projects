const taskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	dueDate: { type: Date },
	priority: { type: String },
	completed: { type: Boolean, default: false },
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import AddList from "./components/AddList";
import TodoList from "./components/TodoList";

export default function App() {
	const intialState = JSON.parse(localStorage.getItem("todos")) || [];
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState(intialState);
	const [editTodo, setEditTodo] = useState(null);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<div className="container">
			<div className="app-wrapper">
				<div>
					<Header />
				</div>
				<div>
					<AddList
						input={input}
						setInput={setInput}
						todos={todos}
						setTodos={setTodos}
						editTodo={editTodo}
						setEditTodo={setEditTodo}
					/>
				</div>
				<div>
					<TodoList
						todos={todos}
						setTodos={setTodos}
						setEditTodo={setEditTodo}
					/>
				</div>
			</div>
		</div>
	);
}

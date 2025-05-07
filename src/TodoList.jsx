import { useState } from "react";
import AllTasks from "./AllTasks";
import TodoForm from "./TodoForm";
import DoneTasks from "./DoneTasks";
import './TodoList.css';
export default function TodoList() {
    const [todos, setTodos] = useState([
        { task: "sample task", priority: "Low", category: "Personal" }
    ]);
    const [doneTodos, setDoneTodos] = useState([]);
    const [newTodo, setnewTodo] = useState("");
    const [newPriority, setPriority] = useState("");
    const [newCategory, setCategory] = useState("");
    const [showDone, setShowDone] = useState(false);

    function handleChange(event) {
        setnewTodo(event.target.value);
    }

    function addNewTodo(event) {
        event.preventDefault();
        if (!newTodo || !newPriority || !newCategory) return;
        setTodos([
            ...todos,
            { task: newTodo, priority: newPriority, category: newCategory }
        ]);
        setnewTodo("");
        setPriority("");
        setCategory("");
    }
    function sortByPriority() {
        const priorityRank = { High: 1, Medium: 2, Low: 3 };
        const sortedTodos = [...todos].sort((a, b) => {
            return priorityRank[a.priority] - priorityRank[b.priority];
        });
        setTodos(sortedTodos);
    }

    function sortByCategory() {
        const categoryRank = { Personal: 1, Professional: 2 };
        const sortedTodos = [...todos].sort((a, b) => {
            return categoryRank[a.category] - categoryRank[b.category];
        });
        setTodos(sortedTodos);
    }

    function deleteTodo(indexToDelete) {
        const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
        setTodos(updatedTodos);
    }

    function markAsDone(indexToMark) {
        const taskToMark = todos[indexToMark];
        const updatedTodos = todos.filter((_, index) => index !== indexToMark);
        setTodos(updatedTodos);
        setDoneTodos([...doneTodos, taskToMark]);
    }
    return (
        <div className="todo-wrapper" align="center">
            <div className="left-panel">
                <h1>Todo List</h1>
                <TodoForm 
                    newTodo={newTodo} 
                    newPriority={newPriority} 
                    newCategory={newCategory} 
                    setnewTodo={setnewTodo} 
                    setPriority={setPriority} 
                    setCategory={setCategory} 
                    addNewTodo={addNewTodo} 
                    handleChange={handleChange}
                />
                <DoneTasks doneTodos={doneTodos} showDone={showDone} />
            </div>
    
            <div className="right-panel">
                <h3>View All Tasks</h3>
                <AllTasks todos={todos} deleteTodo={deleteTodo} markAsDone={markAsDone} />
                <div className="buttons">
                <button onClick={sortByPriority}>Sort by Priority</button>
                <button onClick={sortByCategory}>Sort by Category</button>
                <button onClick={() => setShowDone(!showDone)}>
                    {showDone ? "Hide Done Tasks" : "Show Done Tasks"}
                </button>
            </div>
            </div>
        </div>
    );
    
}

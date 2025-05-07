import './TodoForm.css'
export default function TodoForm({newTodo,newPriority,newCategory,setnewTodo,setPriority,setCategory,addNewTodo,handleChange}){
    return (
        <>
        <form onSubmit={addNewTodo}>
        <br />
        <input
            placeholder="Enter Task"
            type="text"
            value={newTodo}
            onChange={handleChange}
        />
        <br />
        <select value={newPriority} onChange={(e) => setPriority(e.target.value)}>
            <option value="">Select Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
        </select>
        <br />
        <select value={newCategory} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option>Personal</option>
            <option>Professional</option>
        </select>
        <br /><br />
        <button type="submit">Add Task</button>
    </form>
        </>
    )
}
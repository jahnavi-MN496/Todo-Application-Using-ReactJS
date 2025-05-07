import './AllTasks.css';
export default function AllTasks({todos,deleteTodo,markAsDone}){
    if (todos.length === 0) {
        return <p style={{ textAlign: "center" }} className='no-tasks'> NO TASKS YET!</p>;
    }
    return (
        <>
            <table border={2} cellPadding={10} cellSpacing={0} align="center">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Priority</th>
                        <th>Category</th>
                        <th>Delete</th>
                        <th>Mark as Done</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.task}</td>
                            <td>{todo.priority}</td>
                            <td>{todo.category}</td>
                            <td>
                                <button onClick={() => deleteTodo(index)}>Delete</button>
                            </td>
                            <td>
                            <button onClick={() => markAsDone(index)}>Mark As Done</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
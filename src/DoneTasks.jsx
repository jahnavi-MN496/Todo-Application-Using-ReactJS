import './DoneTasks.css';

export default function DoneTasks({ doneTodos, showDone }) {
    return (
        <>
            {showDone && (
                <>
                    <h3 className="done-heading">Done Tasks</h3>
                    {doneTodos.length === 0 ? (
                        <p className="no-tasks">🎉 No done tasks yet!</p>
                    ) : (
                        
                        <table className="done-table">
                            <thead>
                                <tr>
                                    <th>✅ Completed Task</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doneTodos.map((todo, index) => (
                                    <tr key={index}>
                                        <td>{todo.task}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </>
            )}
        </>
    );
}

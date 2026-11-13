import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css"
type TodoListProps = {
    tasks: any[],
};

function TodoList({tasks}:TodoListProps) {
    const hasTasks = true
    if (!hasTasks) {
        return (
            <div>
                Задач нету
            </div>
        );
    }
    return (
        <>
            <h2>Список задач</h2>
            <ul>
                {tasks.map((task) => (
                    <TodoItem id={task.id} title={task.title} completed={task.completed}/>
                ))}
            </ul>
            {/* <TodoItem id={1} title="Задача 1 через props" completed={false} />
            <TodoItem id = {2} title="Задача 2 через props" completed={true} /> */}
        </>
    );
}

export default TodoList
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css"

function TodoList() {
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
            <TodoItem title="Задача 1 через props" completed={false} />
            <TodoItem title="Задача 2 через props" completed={true} />
        </>
    );
}

export default TodoList
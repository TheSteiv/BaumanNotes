import TodoItem from "../TodoItem/TodoItem";

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
            <TodoItem title="Задача 1 через props" completed={false} />
            <TodoItem title="Задача 2 через props" completed={true} />
        </>
    );
}

export default TodoList
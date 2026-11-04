type TodoItemProps = {
    title: string,
    completed: boolean,
};

function TodoItem({title, completed}: TodoItemProps) {
    console.log("props: ", {title, completed})
    return (
        <>
        <div>{title}</div>
        </>
    );
}

export default TodoItem
import './MiddleBlock.css'
import TodoList from './TodoList/TodoList';

function MiddleBlock() {
    type Task = {
        id: number,
        title: string,
        completed: boolean,
    };

    const tasks: Task[] = [
        {id: 1, title: "Задача 1 через map", completed: false},
        {id: 2, title: "Задача 2 через map", completed: false},
        {id: 3, title: "Задача 3 через map", completed: false}
    ]
    return (
        <div className="MiddleBlock">
            <TodoList tasks={tasks} />
        </div>
    );
}

export default MiddleBlock
import { useState } from 'react';
import './MiddleBlock.css'
import TodoList from './TodoList/TodoList';
type Task = {
    id: number,
    title: string,
    completed: boolean,
};


function MiddleBlock() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Задача 1 через map", completed: false },
        { id: 2, title: "Задача 2 через map", completed: false },
        { id: 3, title: "Задача 3 через map", completed: false }
    ]);   

    const changeCompletedTask = (id: number) => {
        for (const i of tasks) { 
            if (i.id === id) {
                i.completed = !i.completed;
                break;  
            }
        }
        setTasks([...tasks]);
    }

    return (
        <div className="MiddleBlock">
            <TodoList tasks={tasks} changeCompletedTask={changeCompletedTask}/>
        </div>
    );
}

export default MiddleBlock
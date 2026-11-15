import { useState, useEffect } from 'react';
import './MiddleBlock.css'
import TodoList from './TodoList/TodoList';

type Task = {
    id: number,
    title: string,
    completed: boolean,
};

const defaultTasks: Task[] = [
    { id: 1, title: "Задача 1 через map", completed: false },
    { id: 2, title: "Задача 2 через map", completed: false },
    { id: 3, title: "Задача 3 через map", completed: false }
];

function MiddleBlock() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
    });

    const changeCompletedTask = (id: number, completed: boolean) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !completed }
                }
                return task;
            })
        )
    }
    
    useEffect(() => {
        console.log("Сохраняем данные в хранилище:", tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="MiddleBlock">
            <TodoList tasks={tasks} changeCompletedTask={changeCompletedTask} />
        </div>
    );
}

export default MiddleBlock;

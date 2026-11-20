import { useState, useEffect } from 'react';
import './MiddleBlock.css'
import TodoList from './TodoList/TodoList';

type Task = {
    id: number,
    title: string,
    completed: boolean,
    year: number,
    month: number,
    day: number,
    time: number,
}

const defaultTasks: Task[] = [
    { id: 1, title: "Задача 1", completed: false, year: 2026, month: 6, day: 14, time: 14 },
    { id: 2, title: "Задача 2", completed: false, year: 2026, month: 11, day: 26, time: 16 },
    { id: 3, title: "Задача 3", completed: false, year: 2026, month: 11, day: 26, time: 14 },
].toSorted((a, b) =>
    (a.year - b.year) ||
    (a.month - b.month) ||
    (a.day - b.day) ||
    (a.time - b.time)
);

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
            }).toSorted((a, b) =>
                (a.year - b.year) ||
                (a.month - b.month) ||
                (a.day - b.day) ||
                (a.time - b.time)
            )
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

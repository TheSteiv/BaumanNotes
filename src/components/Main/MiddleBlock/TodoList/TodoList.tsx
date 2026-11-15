import TodoItem from "../TodoItem/TodoItem"
import "./TodoList.css"

type Task = {
  id: number
  title: string
  completed: boolean
}

type TodoListProps = {
  tasks: Task[]
  changeCompletedTask: (id: number, completed: boolean) => void
}

function TodoList({ tasks, changeCompletedTask }: TodoListProps) {
  if (tasks.length === 0) {
    return <div className="text-zinc-400">Задач нету</div>
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold text-zinc-100">Список задач</h2>
      <ul className="flex flex-col gap-2">
        {tasks.map((task) => (
          <li key={task.id}>
            <TodoItem
              id={task.id}
              title={task.title}
              completed={task.completed}
              changeCompletedTask={changeCompletedTask}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList

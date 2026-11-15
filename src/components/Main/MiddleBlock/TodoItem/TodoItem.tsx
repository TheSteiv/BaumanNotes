import { Button } from "@/components/ui/button";
import "./TodoItem.css"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@/components/ui/item"

type TodoItemProps = {
    id: number,
    title: string,
    completed: boolean,
    changeCompletedTask: (id: number, completed: boolean) => void
};

function TodoItem({id, title, completed, changeCompletedTask }: TodoItemProps) {
    return (
        <>
            <Item
                data-completed={completed}
                className="border border-zinc-700/80 bg-zinc-900 transition-colors hover:border-zinc-400 data-[completed=true]:opacity-60"
            >
                <ItemContent>
                    <ItemTitle className="text-base text-zinc-100 group-data-[completed=true]/item:text-zinc-400 group-data-[completed=true]/item:line-through">
                        {title}
                    </ItemTitle>

                    <ItemDescription className="text-zinc-400 group-data-[completed=true]/item:text-zinc-500">
                        Это описание задачи
                    </ItemDescription>
                </ItemContent>

                <ItemActions>
                    <Button
                        size="icon"
                        className="size-8 rounded-md border border-zinc-700 bg-zinc-800 text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-700 hover:text-white group-data-[completed=true]/item:bg-zinc-800/50 group-data-[completed=true]/item:text-zinc-400"
                        onClick={() => changeCompletedTask(id, completed)}
                    >
                        {completed ? "✓" : "+"}
                    </Button>
                </ItemActions>
            </Item>
        </>
    );
}

export default TodoItem
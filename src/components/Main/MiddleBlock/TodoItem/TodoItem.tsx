import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

type TodoItemProps = {
    title: string,
    completed: boolean,
};

function TodoItem({ title, completed }: TodoItemProps) {
    console.log("props: ", { title, completed })
    return (
        <>
            <Item className="bg-gray-500">
                <ItemContent>
                    <ItemTitle className="text-white">{title}</ItemTitle>
                    <ItemDescription>Это описание задачи</ItemDescription>
                </ItemContent>
                <ItemActions>
                    <Button variant="secondary" size="icon">+</Button>
                </ItemActions>
            </Item>
        </>
    );
}

export default TodoItem
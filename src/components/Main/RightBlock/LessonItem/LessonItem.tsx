import { Button } from "@/components/ui/button";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@/components/ui/item"

function LessonItem() {
    return (
        <>
            <Item
                className=" item border border-zinc-700/80 bg-zinc-900 transition-colors hover:border-zinc-400 data-[completed=true]:opacity-60"
            >
                <ItemContent>
                    <ItemDescription className="text-zinc-400 group-data-[completed=true]/item:text-zinc-500">
                        Такой-то урок
                    </ItemDescription>
                    <ItemTitle className="text-base text-zinc-100 group-data-[completed=true]/item:text-zinc-400 group-data-[completed=true]/item:line-through">
                        Урок
                    </ItemTitle>
                </ItemContent>

                <ItemActions>
                    <Button
                        size="icon"
                        className="size-8 rounded-md border border-zinc-700 bg-zinc-800 text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-700 hover:text-white group-data-[completed=true]/item:bg-zinc-800/50 group-data-[completed=true]/item:text-zinc-400"
                    >
                        +
                    </Button>
                </ItemActions>
            </Item>
        </>
    )
}

export default LessonItem
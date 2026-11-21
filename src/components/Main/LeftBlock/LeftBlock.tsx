import './LeftBlock.css';
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react';
import { NewGroupForm } from './NewGroupForm/NewGroupForm';


function LeftBlock() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined)
 
  React.useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone)
  }, [])

  return (
    <>
      <div className="LeftBlock">
        <h2>Календарь </h2>
        <Card className="mx-auto w-fit p-0 card">
          <CardContent className="p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              timeZone={timeZone}
              className="calendar"
              modifiersClassNames={{
                selected: "selected-day",
              }}
              fixedWeeks 
            />
          </CardContent>
        </Card>
        <h1>{date?.toDateString()}</h1>



        <h2>Группы {}</h2>
        <div className="groups_block">
          <Popover>
            <PopoverTrigger render={<Button variant="outline" className="newGroupButton">Новая группа</Button>} />
            <PopoverContent className="w-64 popover" align="start">
              <NewGroupForm />
            </PopoverContent>
          </Popover>
        </div>
      </div>

    </>
  );
}

export default LeftBlock
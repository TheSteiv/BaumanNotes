import './LeftBlock.css';
import { Calendar } from "@/components/ui/calendar"
import { useState } from 'react';

function LeftBlock() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      <div className="LeftBlock">
        <h2>Календарь</h2>
        <Calendar mode="single" className="w-full min-w-0 rounded-lg calendar" />
        <h2>Группы</h2>
        <div className="groups_block">
          здесь будут отбражаться группы...
        </div>
      </div>

    </>
  );
}

export default LeftBlock
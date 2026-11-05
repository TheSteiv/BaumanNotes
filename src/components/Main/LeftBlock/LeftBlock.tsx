import './LeftBlock.css';
import { Calendar } from "@/components/ui/calendar"
import { useState } from 'react';

function LeftBlock() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      <div className="LeftBlock">
        Левый блок
        <Calendar mode="single" className="w-full min-w-0 rounded-lg border" />
      </div>

    </>
  );
}

export default LeftBlock
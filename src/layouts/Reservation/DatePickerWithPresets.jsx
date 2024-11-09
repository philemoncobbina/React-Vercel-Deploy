import React, { useState } from 'react';
import { format, startOfDay, isBefore, isWeekend } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CustomCalendar from './CustomCalendar'; // Import CustomCalendar

// DatePickerWithPresets component definition
export const DatePickerWithPresets = ({ onChange, onError }) => {
  const [date, setDate] = useState(null);

  const handleDateSelect = (selectedDate) => {
    const today = startOfDay(new Date());
    const selected = startOfDay(new Date(selectedDate)); 

    if (isBefore(selected, today)) {
      onError("You cannot select a past date.");
      setDate(null);
      return;
    }

    if (isWeekend(selected)) {
      onError("You can only select a weekday (Monday to Friday).");
      setDate(null);
      return;
    }

    onError(null); 
    setDate(selected);
    onChange(format(selected, 'yyyy-MM-dd'));
  };

  const handlePresetSelect = (daysToAdd) => {
    const today = startOfDay(new Date());
    const selectedDate = new Date(today.setDate(today.getDate() + daysToAdd)); 
    handleDateSelect(selectedDate);
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full bg-white justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex bg-white w-auto flex-col space-y-2 p-2">
          <Select
            onValueChange={(value) => handlePresetSelect(parseInt(value, 10))}
          >
            <SelectTrigger>
              <SelectValue className="bg-white" placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white" position="popper">
              <SelectItem value="0">Today</SelectItem>
              <SelectItem value="1">Tomorrow</SelectItem>
              <SelectItem value="3">In 3 days</SelectItem>
              <SelectItem value="7">In a week</SelectItem>
            </SelectContent>
          </Select>
          <div className="rounded-md border bg-white">
            <CustomCalendar selectedDate={date} onDateSelect={handleDateSelect} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

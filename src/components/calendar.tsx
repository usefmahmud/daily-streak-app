interface CalendarProps {
  streakDates: string[];
  yearDates: string[];
}

const Calendar = ({ streakDates, yearDates }: CalendarProps) => {
  return (
    <div className='flex max-h-[136px] max-w-[1300px] overflow-x-auto flex-col flex-wrap gap-1'>
      {yearDates.map((date, i) => {
        const hasStreak = streakDates.includes(date);
        return (
          <div
            key={i}
            className={`h-4 w-4 rounded-sm border ${
              hasStreak
                ? 'border-green-600 bg-green-500'
                : 'border-gray-300 bg-gray-100'
            }`}
            title={date}
          />
        );
      })}
    </div>
  );
};

export default Calendar;

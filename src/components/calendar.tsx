import { useStreakStore } from '../stores/streak.store';
import { generateYearDates } from '../utils/generate-dates';

const Calendar = () => {
  const streakDates = useStreakStore((state) => state.streakDates);

  const yearDates = generateYearDates();

  return (
    <div className='flex max-h-[136px] max-w-[1300px] flex-col flex-wrap gap-1 overflow-x-auto'>
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

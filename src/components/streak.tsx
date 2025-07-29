import { useStreakStore } from '../stores/streak.store';

const Streak = () => {
  const { currentStreak, longestStreak } = useStreakStore();

  const addStreakDate = useStreakStore((state) => state.addStreakDate);

  const handleAddStreak = () => {
    const today = new Date();

    addStreakDate(today);
  };
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <span className='text-9xl'>🔥</span>
        <span className='text-5xl font-bold'>{currentStreak} days</span>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <button
          onClick={handleAddStreak}
          className='cursor-pointer rounded-md bg-green-600 px-5 py-1 text-2xl font-medium text-white transition-all active:scale-99'
        >
          I'm On The Streak
        </button>
        longest streak: {longestStreak} days
      </div>
    </div>
  );
};

export default Streak;

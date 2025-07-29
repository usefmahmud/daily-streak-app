const Streak = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <span className='text-9xl'>🔥</span>
        <span className='text-5xl font-bold'>0 days</span>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <button className='cursor-pointer rounded-md bg-green-600 px-5 py-1 text-2xl font-medium text-white transition-all active:scale-99'>
          I'm On The Streak
        </button>
        longest streak: 0 days
      </div>
    </div>
  );
};

export default Streak;

import Calendar from './components/calendar';
import Streak from './components/streak';
import { YEAR_DAYS } from './mock/date';

function App() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-10 p-6'>
      <Streak />
      <Calendar
        streakDates={['2024-08-01', '2024-08-02']}
        yearDates={YEAR_DAYS}
      />
    </div>
  );
}

export default App;

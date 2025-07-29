import Calendar from './components/calendar';
import Streak from './components/streak';

function App() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-10 p-6'>
      <Streak />
      <Calendar />
    </div>
  );
}

export default App;

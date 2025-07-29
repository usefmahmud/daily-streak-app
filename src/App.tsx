import Calendar from './components/calendar';
import Streak from './components/streak';

function App() {
  return (
    <div className='flex h-screen items-center justify-center gap-10 flex-col'>
      <Streak />
      <Calendar />
    </div>
  );
}

export default App;

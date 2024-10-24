import { ModeToggle } from './components/ModeToggle';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className='text-red-500 mt-36 text-center text-5xl'>
      <ModeToggle />
      <Button>App</Button>
    </div>
  );
}

export default App;

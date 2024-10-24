import { AnimatedGridPatternDemo } from './components/AnimatedGridPatternDemo';
import { ModeToggle } from './components/ModeToggle';
import { NumberTickerDemo } from './components/NumberTickerDemo';
import { RainbowButtonDemo } from './components/RainbowButtonDemo';
import { SparklesTextDemo } from './components/SparklesTextDemo';
import BlurFade from './components/ui/blur-fade';
import { Button } from './components/ui/button';

function App() {
  return (
    <BlurFade delay={0.25 * 2} inView>
      <AnimatedGridPatternDemo>
        <div className='absolute top-3 right-3'>
          <ModeToggle />
        </div>
        <div className='grid w-screen h-screen grid-cols-1 md:grid-cols-2'>
          <div className='space-y-5 p-16'>
            <Button>App</Button>
            <NumberTickerDemo />
            <SparklesTextDemo />
            <RainbowButtonDemo />
          </div>
          <div></div>
        </div>
      </AnimatedGridPatternDemo>
    </BlurFade>
  );
}

export default App;

import { AnimatedPinDemo } from './components/AnimatedPinDemo';
import { CoverDemo } from './components/CoverDemo';
import { MarqueeDemo } from './components/MarqueeDemo';
import { NumberTickerDemo } from './components/NumberTickerDemo';
import { RainbowButtonDemo } from './components/RainbowButtonDemo';
import { SparklesTextDemo } from './components/SparklesTextDemo';
import { ThreeDCardDemo } from './components/ThreeDCardDemo';
import BlurFade from './components/ui/blur-fade';

function App() {
  return (
    <>
      <section className='w-full p-16 mb-16'>
        <BlurFade delay={0.25 * 2} inView>
          <div className='flex flex-col md:flex-row'>
            <div className='space-y-5 w-3/5 my-auto'>
              <SparklesTextDemo />
              <NumberTickerDemo />
              <RainbowButtonDemo />
            </div>
            <div>
              <ThreeDCardDemo />
            </div>
          </div>
        </BlurFade>
      </section>

      <section className='w-full p-16 mb-16'>
        <BlurFade delay={0.25 * 2} inView className='space-y-8'>
          <CoverDemo />
          <div className='flex  flex-row flex-wrap mx-auto gap-y-16 gap-x-6'>
            <AnimatedPinDemo />
            <AnimatedPinDemo />
            <AnimatedPinDemo />
            <AnimatedPinDemo />
            <AnimatedPinDemo />
            <AnimatedPinDemo />
          </div>
        </BlurFade>
      </section>

      <section className='w-full p-16 mb-16'>
        {/* <BentoGridSecondDemo /> */}
        <MarqueeDemo />
      </section>
    </>
  );
}

export default App;

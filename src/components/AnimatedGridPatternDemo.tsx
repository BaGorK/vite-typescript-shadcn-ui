import { cn } from '@/lib/utils';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';

export function AnimatedGridPatternDemo() {
  return (
    <div className='absolute top-0 -z-1 flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20'>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.4}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 -z-1'
        )}
      />
    </div>
  );
}

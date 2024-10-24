import { cn } from '@/lib/utils';
import { DotPattern } from '@/components/ui/dot-pattern';
import { ReactNode } from 'react';

export function DotPatternDemo({children}: {children: ReactNode}) {
  return (
    <div className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
      {children}
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
        )}
      />
    </div>
  );
}

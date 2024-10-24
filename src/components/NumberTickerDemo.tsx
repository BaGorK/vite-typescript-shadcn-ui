import NumberTicker from "./ui/number-ticker";

export function NumberTickerDemo() {
  return (
    <p className='whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white'>
      <NumberTicker value={2340} />
    </p>
  );
}
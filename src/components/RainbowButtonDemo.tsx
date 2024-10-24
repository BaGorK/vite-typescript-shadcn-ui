import { RainbowButton } from '@/components/ui/rainbow-button';
import { Link } from 'react-router-dom';

export function RainbowButtonDemo() {
  return (
    <RainbowButton>
      <Link to='/blogs'>Get Unlimited Access | All Blogs</Link>
    </RainbowButton>
  );
}

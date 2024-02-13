import { cn } from '@/lib/utils';
import Link from 'next/link';
import { AccountDropdown } from './AccountDropdown';
import { MobileSidebar } from './MobileSidebar';
import ThemeToggle from './ThemeToggle';
import { buttonVariants } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed inset-x-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="container flex h-14 items-center justify-between">
        <div>
          <Link href={'/'} className="text-center text-sm font-bold leading-tight">
            PDF<span className="text-primary">Mind</span>
          </Link>
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          {/* <AccountDropdown /> */}
          {/* <ThemeToggle /> */}
          <Link href={'/sign-in'} className="text-sm font-semibold">
            Pricing
          </Link>
          <Link href={'/sign-in'} className="text-sm font-semibold">
            Sign In
          </Link>
          <Link href={'/sign-up'} className={buttonVariants({ size: 'sm', variant: 'secondary' })}>
            Get Started <ArrowRight className="ml-1 size-4" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

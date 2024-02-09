'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ArrowRight, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { buttonVariants } from '../ui/button';

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon className="hover:cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="right" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="flex flex-col gap-4">
                <Link href={'/sign-up'} className="text-sm font-semibold">
                  Pricing
                </Link>
                <Link href={'/sign-up'} className="text-sm font-semibold">
                  Sign In
                </Link>
                <Link href={'/sign-in'} className={buttonVariants({ size: 'sm', variant: 'muted' })}>
                  Get Started <ArrowRight className="ml-1 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

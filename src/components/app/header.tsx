'use client'

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
            <SidebarTrigger />
        </div>
        <a href="https://onepiece.fandom.com/wiki/Monkey_D._Luffy" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Read More</Button>
        </a>
      </div>
    </header>
  );
}

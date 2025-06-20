import { JollyRogerIcon } from '../icons/jolly-roger';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export default function Header() {
  const navLinks = [
    { name: 'Biography', href: '/biography' },
    { name: 'Moveset', href: '/moveset' },
    { name: 'Forms', href: '/forms' },
    { name: 'Ask Luffy', href: '/ask-luffy' },
    { name: 'Crew', href: '/crew' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <JollyRogerIcon className="h-8 w-8 text-primary" />
          <span className="font-bold text-2xl font-headline text-primary tracking-wider">Straw Hat Navigator</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-primary transition-colors text-lg">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://onepiece.fandom.com/wiki/Monkey_D._Luffy" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">Read More</Button>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-12">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-2xl font-headline hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <a href="https://onepiece.fandom.com/wiki/Monkey_D._Luffy" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">Read More</Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

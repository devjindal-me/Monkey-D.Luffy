import { JollyRogerIcon } from '../icons/jolly-roger';
import { Button } from '@/components/ui/button';

export default function Header() {
  const navLinks = [
    { name: 'Biography', href: '#biography' },
    { name: 'Moveset', href: '#moveset' },
    { name: 'Forms', href: '#forms' },
    { name: 'Ask Luffy', href: '#ask-luffy' },
    { name: 'Crew', href: '#crew' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <a href="#hero" className="flex items-center space-x-2">
          <JollyRogerIcon className="h-8 w-8 text-primary" />
          <span className="font-bold text-2xl font-headline text-primary tracking-wider">Straw Hat Navigator</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary transition-colors text-lg">
              {link.name}
            </a>
          ))}
        </nav>
        <a href="https://onepiece.fandom.com/wiki/Monkey_D._Luffy" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">Read More</Button>
        </a>
      </div>
    </header>
  );
}

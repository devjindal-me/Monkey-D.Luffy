import { JollyRogerIcon } from '../icons/jolly-roger';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center items-center mb-4">
          <JollyRogerIcon className="h-10 w-10 text-primary" />
        </div>
        <p className="mb-2">
          <a href="#" className="hover:text-primary transition-colors">Back to Top</a>
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Straw Hat Navigator. All rights reserved for the future Pirate King.
        </p>
         <p className="text-xs mt-4">This is a fan-made website. One Piece and all related characters are trademarks of Eiichiro Oda, Shueisha, and Toei Animation.</p>
      </div>
    </footer>
  );
}

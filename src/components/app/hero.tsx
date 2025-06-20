import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background/80 to-secondary/40">
      <div className="container mx-auto h-full px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
            <h1 className="text-6xl md:text-8xl font-extrabold font-headline text-primary leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Monkey D. Luffy
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-foreground/80 max-w-lg">
              The Journey of the Man Who Will Become the King of the Pirates!
            </p>
            <Link href="/biography" className="mt-8">
              <Button size="lg" className="text-lg">
                Start the Adventure
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="relative h-64 md:h-full w-full">
            <Image
              src="https://placehold.co/800x800.png"
              alt="Hero image of Monkey D. Luffy"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              priority
              data-ai-hint="luffy smiling"
              className="opacity-90 md:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

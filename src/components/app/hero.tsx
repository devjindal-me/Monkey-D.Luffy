import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[calc(100vh-4rem)] bg-accent/20">
      <div className="container mx-auto h-full px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-primary-foreground bg-primary inline-block px-4 py-2 rounded-lg leading-tight">
              Monkey D. Luffy
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-lg">
              The Journey of the Man Who Will Become the King of the Pirates!
            </p>
            <a href="#biography" className="mt-8">
              <Button size="lg">
                Start the Adventure
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          <div className="relative h-64 md:h-full w-full">
            <Image
              src="https://placehold.co/800x1000.png"
              alt="Hero image of Monkey D. Luffy"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              priority
              data-ai-hint="monkey d luffy pirate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

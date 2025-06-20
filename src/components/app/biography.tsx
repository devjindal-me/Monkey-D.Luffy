import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { DevilFruitIcon } from '../icons/devil-fruit';
import { StrawHatIcon } from '../icons/straw-hat';

export default function Biography() {
  return (
    <section id="biography" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold font-headline text-primary">The Man Who Will Be King</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Meet Monkey D. Luffy, the rubbery captain of the Straw Hat Pirates with a heart of gold and a stomach that's a bottomless pit.
          </p>
        </div>
        <Card className="shadow-lg border-primary/20 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="https://placehold.co/600x600.png"
                  alt="Monkey D. Luffy"
                  width={600}
                  height={600}
                  className="object-cover rounded-lg shadow-lg w-full aspect-square"
                  data-ai-hint="luffy serious"
                />
              </div>
              <div className="space-y-6 text-foreground/90">
                <h3 className="text-4xl md:text-5xl font-headline text-primary">Monkey D. Luffy</h3>
                <p className="text-lg">
                  From the peaceful shores of Foosha Village, a young boy with a boundless spirit and a contagious grin set out to sea. Inspired by his hero, the great pirate "Red-Haired" Shanks, Luffy dreams of finding the legendary treasure, the One Piece, and claiming the title of Pirate King.
                </p>
                <div className="flex items-start space-x-4">
                  <div className="text-primary pt-1">
                    <DevilFruitIcon className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="font-bold font-headline text-2xl text-primary/90">The Gomu Gomu no Mi</h3>
                    <p className="text-muted-foreground">
                      As a child, Luffy accidentally ate the Gum-Gum Fruit, a Devil Fruit that turned his body into rubber. This gives him the ability to stretch, inflate, and twist his body in incredible ways, forming the basis of his unique fighting style.
                    </p>
                  </div>
                </div>
                 <div className="flex items-start space-x-4">
                  <div className="text-primary pt-1">
                    <StrawHatIcon className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="font-bold font-headline text-2xl text-primary/90">The Straw Hat</h3>
                    <p className="text-muted-foreground">
                      His most prized possession is a simple straw hat, gifted to him by Shanks as a promise. Luffy has sworn to return it one day, once he has become a great pirate, making the hat a symbol of his unbreakable ambition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

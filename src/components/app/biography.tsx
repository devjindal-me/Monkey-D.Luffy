import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DevilFruitIcon } from '../icons/devil-fruit';
import { StrawHatIcon } from '../icons/straw-hat';

export default function Biography() {
  return (
    <section id="biography" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">The Man Who Will Be King</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Meet Monkey D. Luffy, the rubbery captain of the Straw Hat Pirates with a heart of gold and a stomach that's a bottomless pit.
          </p>
        </div>
        <Card className="overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/3">
              <Image
                src="https://placehold.co/600x800.png"
                alt="Monkey D. Luffy"
                width={600}
                height={800}
                className="object-cover h-full w-full"
                data-ai-hint="monkey d luffy"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-headline text-primary-foreground bg-primary inline-block px-3 py-1 rounded-md">Monkey D. Luffy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p>
                  From the peaceful shores of Foosha Village, a young boy with a boundless spirit and a contagious grin set out to sea. Inspired by his hero, the great pirate "Red-Haired" Shanks, Luffy dreams of finding the legendary treasure, the One Piece, and claiming the title of Pirate King.
                </p>
                <div className="flex items-start space-x-4">
                  <div className="text-primary pt-1">
                    <DevilFruitIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold font-headline">The Gomu Gomu no Mi</h3>
                    <p className="text-muted-foreground">
                      As a child, Luffy accidentally ate the Gum-Gum Fruit, a Devil Fruit that turned his body into rubber. This gives him the ability to stretch, inflate, and twist his body in incredible ways, forming the basis of his unique fighting style.
                    </p>
                  </div>
                </div>
                 <div className="flex items-start space-x-4">
                  <div className="text-primary pt-1">
                    <StrawHatIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold font-headline">The Straw Hat</h3>
                    <p className="text-muted-foreground">
                      His most prized possession is a simple straw hat, gifted to him by Shanks as a promise. Luffy has sworn to return it one day, once he has become a great pirate, making the hat a symbol of his unbreakable ambition.
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

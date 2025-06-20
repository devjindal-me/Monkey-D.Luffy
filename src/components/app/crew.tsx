import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const crewMembers = [
  { name: 'Roronoa Zoro', role: 'Swordsman', image: 'https://placehold.co/400x400.png', hint: 'roronoa zoro' },
  { name: 'Nami', role: 'Navigator', image: 'https://placehold.co/400x400.png', hint: 'nami one piece' },
  { name: 'Usopp', role: 'Sniper', image: 'https://placehold.co/400x400.png', hint: 'usopp one piece' },
  { name: 'Sanji', role: 'Cook', image: 'https://placehold.co/400x400.png', hint: 'sanji one piece' },
  { name: 'Tony Tony Chopper', role: 'Doctor', image: 'https://placehold.co/400x400.png', hint: 'tony chopper' },
  { name: 'Nico Robin', role: 'Archaeologist', image: 'https://placehold.co/400x400.png', hint: 'nico robin' },
  { name: 'Franky', role: 'Shipwright', image: 'https://placehold.co/400x400.png', hint: 'franky one piece' },
  { name: 'Brook', role: 'Musician', image: 'https://placehold.co/400x400.png', hint: 'brook one piece' },
  { name: 'Jinbe', role: 'Helmsman', image: 'https://placehold.co/400x400.png', hint: 'jinbe one piece' },
];

export default function Crew() {
  return (
    <section id="crew" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">The Straw Hat Pirates</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            A captain is only as strong as his crew. These are the loyal, powerful, and slightly eccentric friends sailing with Luffy to the end of the Grand Line.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {crewMembers.map((member) => (
            <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="rounded-t-lg object-cover aspect-square"
                  data-ai-hint={member.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-headline text-primary-foreground bg-primary inline-block px-3 py-1 rounded-md">{member.name}</CardTitle>
                <CardDescription className="text-accent-foreground/80 mt-2 text-base">{member.role}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

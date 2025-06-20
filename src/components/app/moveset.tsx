import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const moves = [
  {
    name: 'Gomu Gomu no Pistol',
    description: "Luffy's signature punch. He launches his fist forward like a bullet, capable of hitting enemies from a great distance.",
  },
  {
    name: 'Gomu Gomu no Gatling',
    description: 'A flurry of lightning-fast punches that resembles a machine gun, overwhelming opponents with a barrage of strikes.',
  },
  {
    name: 'Gomu Gomu no Bazooka',
    description: 'Luffy stretches both arms far back and then hurls them forward, delivering a massive, two-handed blow that can send enemies flying.',
  },
  {
    name: 'Gomu Gomu no Rocket',
    description: 'He stretches his arms to grab onto a distant object and catapults himself through the air for high-speed travel or a powerful attack.',
  },
  {
    name: 'Gomu Gomu no Fusen (Balloon)',
    description: 'Luffy inflates his rubber body like a balloon, allowing him to deflect cannonballs and other blunt projectiles right back at the sender.',
  },
];

export default function Moveset() {
  return (
    <section id="moveset" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold font-headline text-primary">Signature Moves</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            With a body made of rubber, Luffy's fighting style is as unpredictable as it is powerful. Here are some of his iconic techniques.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full border-t border-primary/20">
            {moves.map((move, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/20">
                <AccordionTrigger className="text-2xl font-headline hover:no-underline text-left text-primary/90 hover:text-primary">
                  {move.name}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {move.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

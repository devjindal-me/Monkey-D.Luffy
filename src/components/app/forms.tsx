import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const forms = [
  {
    name: 'Gear Second',
    description: 'Luffy pumps blood faster through his body, dramatically increasing his speed and power. His skin turns pink and emits steam.',
    image: 'https://placehold.co/1200x600.png',
    hint: 'luffy gear second',
  },
  {
    name: 'Gear Third',
    description: 'By blowing air into his bones, Luffy can inflate his limbs to gigantic proportions, granting him immense destructive power at the cost of speed.',
    image: 'https://placehold.co/1200x600.png',
    hint: 'luffy gear third',
  },
  {
    name: 'Gear Fourth',
    description: 'Luffy inflates his muscles and coats his body in Armament Haki. This form has several variations, like the powerful Bounceman and the swift Snakeman.',
    image: 'https://placehold.co/1200x600.png',
    hint: 'luffy gear fourth',
  },
  {
    name: 'Gear Fifth',
    description: "The awakened form of his Devil Fruit, revealing its true name: the Human-Human Fruit, Model: Nika. It grants him a rubbery body with limitless freedom, embodying the 'Warrior of Liberation'.",
    image: 'https://placehold.co/1200x600.png',
    hint: 'luffy gear fifth',
  },
];

export default function Forms() {
  return (
    <section id="forms" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">The Gears of a King</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            To protect his friends and achieve his dream, Luffy has pushed his rubbery body to its limits, unlocking incredible transformations.
          </p>
        </div>
        <Tabs defaultValue="Gear Second" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-accent/20">
            {forms.map((form) => (
              <TabsTrigger key={form.name} value={form.name} className="font-headline data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {form.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {forms.map((form) => (
            <TabsContent key={form.name} value={form.name}>
              <Card className="overflow-hidden shadow-lg">
                <CardHeader className="p-0 relative">
                  <Image
                    src={form.image}
                    alt={form.name}
                    width={1200}
                    height={600}
                    className="object-cover w-full h-[300px] md:h-[400px]"
                    data-ai-hint={form.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </CardHeader>
                <CardContent className="relative -mt-16 z-10 p-6 md:p-8 text-white">
                  <CardTitle className="text-2xl md:text-3xl font-headline text-primary-foreground bg-primary inline-block px-3 py-1 rounded-md">{form.name}</CardTitle>
                  <CardDescription className="text-lg mt-4 max-w-2xl text-card-foreground/90 bg-card/90 p-4 rounded-lg">
                    {form.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

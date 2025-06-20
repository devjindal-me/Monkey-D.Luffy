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
    <section id="forms" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold font-headline text-primary">The Gears of a King</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            To protect his friends and achieve his dream, Luffy has pushed his rubbery body to its limits, unlocking incredible transformations.
          </p>
        </div>
        <Tabs defaultValue="Gear Second" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-primary/10 h-auto">
            {forms.map((form) => (
              <TabsTrigger key={form.name} value={form.name} className="font-headline text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {form.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {forms.map((form) => (
            <TabsContent key={form.name} value={form.name}>
              <Card className="overflow-hidden shadow-lg border-none">
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
                <CardContent className="relative -mt-24 z-10 p-6 md:p-8">
                  <CardTitle className="text-4xl md:text-5xl font-headline text-primary drop-shadow-lg">{form.name}</CardTitle>
                  <CardDescription className="text-lg mt-4 max-w-2xl text-card-foreground bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
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

import Header from '@/components/app/header';
import Hero from '@/components/app/hero';
import Biography from '@/components/app/biography';
import Moveset from '@/components/app/moveset';
import Forms from '@/components/app/forms';
import AskLuffy from '@/components/app/ask-luffy';
import Crew from '@/components/app/crew';
import Footer from '@/components/app/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Biography />
        <Moveset />
        <Forms />
        <AskLuffy />
        <Crew />
      </main>
      <Footer />
    </div>
  );
}

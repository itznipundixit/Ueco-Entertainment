import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import LetsTalk from "@/components/LetsTalk";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactFrom";
import TeamGrid from "@/components/TeamGrid";
import EventsGrid from "@/components/EventGrid";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <LetsTalk />
      <Testimonials />
      <TeamGrid />
      <EventsGrid />
      <ContactForm />
    </main>
  );
}

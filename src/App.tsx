import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import About from "./components/About";
import Topics from "./components/Topics";
import Steps from "./components/Steps";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <About />
        <Topics />
        <Steps />
        <Reviews />
        <Faq />
        <Cta />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

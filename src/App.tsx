import GetInTouchForm from "./components/GetInTouchForm/GetInTouchForm";
import Process from "./components/Process/Process";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero/hero";
import LogoBox from "./components/logo-gorizontal/logo-box";
import Navbar from "./components/navbar/navbar";
import NumberCard from "./components/number-card/numberCard";
import SafeJourney from "./components/safe-journey/SafeJourney";
import Services from "./components/services/services";
import Transportation from "./components/tranportation/Transportation";
import "./index.css";
function App() {
  return (
    <div className="w-full min-w-full">
      <Navbar />
      <HeroSection></HeroSection>
      <LogoBox />
      <Transportation />
      <NumberCard />
      <Services />
      <SafeJourney />
      <Process />
      <GetInTouchForm />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

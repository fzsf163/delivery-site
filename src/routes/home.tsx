import GetInTouchForm from "../components/GetInTouchForm/GetInTouchForm";
import Process from "../components/Process/Process";
import Faq from "../components/faq/Faq";
import HeroSection from "../components/hero/hero";
import LogoBox from "../components/logo-gorizontal/logo-box";
import NumberCard from "../components/number-card/numberCard";
import SafeJourney from "../components/safe-journey/SafeJourney";
import Services from "../components/services/services";
import Transportation from "../components/tranportation/Transportation";
function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <LogoBox />
      <Transportation />
      <NumberCard />
      <Services />
      <SafeJourney />
      <Process />
      <GetInTouchForm />
      <Faq />
    </div>
  );
}

export default Home;

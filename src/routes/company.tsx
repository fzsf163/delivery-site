import Process from "../components/Process/Process";
import Faq from "../components/faq/Faq";
import NumberCard from "../components/number-card/numberCard";
import SafeJourney from "../components/safe-journey/SafeJourney";
import Services from "../components/services/services";

function Copmany() {
  return (
    <div>
      {" "}
      <NumberCard />
      <Services />
      <SafeJourney />
      <Process />
      <Faq />
    </div>
  );
}

export default Copmany;

import Process from "../components/Process/Process";
import CompanyHero from "../components/compnay/compnay";
import ExploreCompany from "../components/compnay/exploreCompany";
import Faq from "../components/faq/Faq";
import NumberCard from "../components/number-card/numberCard";
import SafeJourney from "../components/safe-journey/SafeJourney";
import Services from "../components/services/services";
import Transportation from "../components/tranportation/Transportation";

function Copmany() {
  return (
    <div>
      <CompanyHero></CompanyHero>
      <ExploreCompany></ExploreCompany>
      <NumberCard />
      <div className="my-20">
        <Transportation />
      </div>
      <Services />
      <SafeJourney />
      <Process />
      <Faq />
    </div>
  );
}

export default Copmany;

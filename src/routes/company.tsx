import CompanyHero from "../components/compnay/compnay";
import ExploreCompany from "../components/compnay/exploreCompany";
import PeopleCompany from "../components/compnay/people";
import Faq from "../components/faq/Faq";
import NumberCard from "../components/number-card/numberCard";
import SafeJourney from "../components/safe-journey/SafeJourney";
import Services from "../components/services/services";

function Copmany() {
  return (
    <div>
      <CompanyHero></CompanyHero>
      <ExploreCompany></ExploreCompany>
      <PeopleCompany></PeopleCompany>
      <NumberCard />
      <Services />
      <SafeJourney />
      <Faq />
    </div>
  );
}

export default Copmany;

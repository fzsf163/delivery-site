import GetInTouchForm from "../components/GetInTouchForm/GetInTouchForm";
import SafeJourney from "../components/safe-journey/SafeJourney";
import ServiceHero from "../components/service/servicehero";
import Services from "../components/services/services";

function Service() {
  return (
    <div>
      <ServiceHero/>
      <Services />
      <SafeJourney />
      <GetInTouchForm />
    </div>
  );
}

export default Service;

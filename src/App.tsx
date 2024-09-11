import placholder from "./assets/heroimg/tom-barrett-M0AWNxnLaMw-unsplash.webp";
import GetInTouchForm from "./components/GetInTouchForm/GetInTouchForm";
import Process from "./components/Process/Process";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
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
      {/* this is placeholder */}
      <div
        style={{
          backgroundImage: `url("${placholder}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[50rem] w-full"
      >
        <h1 className="flex h-full flex-grow items-center justify-center bg-black/10 text-5xl text-white/50">
          Placeholder Hero
        </h1>
      </div>
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

import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import "./index.css";
import ScrollToTop from "./Utls/scrolltotop";

function App() {
  return (
    <div className="w-full min-w-full transition-all duration-300 ease-in-out">
      <ScrollToTop></ScrollToTop>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;

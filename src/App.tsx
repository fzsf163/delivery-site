import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import "./index.css";

function App() {
  return (
    <div className="w-full min-w-full">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import News from "./components/News";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Works />
      <News />
      <Cards />
      <Footer />
    </>
  );
}

export default App;

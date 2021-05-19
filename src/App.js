import Header from "./componets/header/header";
import Reasons from "./componets/about/components/reasons";
import Logoicons from "./componets/about/components/logoicons";
import Choice from "./componets/about/components/choice";
import About from "./componets/about/about";
import Footer from "./componets/footer/footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="background1">
        <Header />
        <Reasons />
        <Logoicons />
        <Choice />
      </div>
      <div className="background2">
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;

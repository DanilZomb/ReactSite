import Header from "./componets/header/header";
import About from "./componets/about/about";
import Footer from "./componets/footer/footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="background1">
        <Header />
      </div>
      <div class="background2">
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;

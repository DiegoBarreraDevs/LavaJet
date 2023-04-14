import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, About, Contact, FaqsSection, Experience, Footer, Credits } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Contact />
        <FaqsSection/>
        <Footer />
        <Credits/>
      </div>
    </BrowserRouter>
  );
};

export default App;

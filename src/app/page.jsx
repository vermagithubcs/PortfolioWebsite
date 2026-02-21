import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Work from "./components/Work";
import React from "react";
import TechStack from "./components/TechStack";
const App = () => {
  return (
    <>
      <section id="main">
        {/* Header page  */}
        <Header />

        {/* About page  */}
        <About />

        {/* TechStack Page  */}
        <TechStack />

        {/* Works page  */}
        <Work />

        {/* Services page  */}
        <Services />

        {/* Footer page  */}
        <Footer />
      </section>
    </>
  );
};

export default App;

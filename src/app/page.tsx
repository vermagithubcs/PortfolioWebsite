import Header from "../app/components/Header";
import About from "../app/components/About";
import Footer from "../app/components/Footer";
import Services from "../app/components/Services";
import Work from "../app/components/Work";
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

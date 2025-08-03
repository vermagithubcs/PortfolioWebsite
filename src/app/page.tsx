import Header from "../app/components/Header";
import BigTextAnimation from "../app/components/BigTextAnimation";
import About from "../app/components/About";
import Footer from "../app/components/Footer";
import Services from "../app/components/Services";
import Work from "../app/components/Work";
import React from "react";
const App = () => {
  return (
    <>
      <section id="main">
        {/* Header page  */}
        <Header />

        {/* Page 2 Big Text Animation  */}
        <BigTextAnimation />

        {/* About page  */}
        <About />

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

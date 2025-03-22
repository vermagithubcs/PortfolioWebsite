import Header from "./Components/Header";
import BigTextAnimation from "./Components/BigTextAnimation";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Work from "./Components/Work";
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

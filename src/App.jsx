import Header from "./Components/Header";
import BigTextAnimation from "./Components/BigTextAnimation";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
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
        <Projects />

        {/* Services page  */}
        <Services />

        {/* Footer page  */}
        <Footer />
      </section>
    </>
  );
};

export default App;

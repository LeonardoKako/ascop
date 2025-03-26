import Contato from "../../components/Contanto";
import Eventos from "../../components/Eventos";
import Footer from "../../components/Footer";
import Galeria from "../../components/Galeria";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import Sobre from "../../components/Sobre";
import Ascop from "../../components/Ascop";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Ascop />
      <Sobre />
      <Eventos />
      <Galeria />
      <Contato />
      <Footer />
    </>
  );
};

export default Home;

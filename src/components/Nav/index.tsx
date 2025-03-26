import { Header } from "./styles";
import logo from "../../assets/logo.jpeg";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Nav = () => {
  return (
    <Header>
      <img src={logo} alt="Logo" />
      <ul>
        <li onClick={() => scrollToSection("ascop")}>Ascop</li>
        <li onClick={() => scrollToSection("sobre")}>Sobre</li>
        <li onClick={() => scrollToSection("eventos")}>Eventos</li>
        <li onClick={() => scrollToSection("galeria")}>Galeria</li>
        <li onClick={() => scrollToSection("contato")}>Contato</li>
      </ul>
    </Header>
  );
};

export default Nav;

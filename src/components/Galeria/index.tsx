import { Container, Desc, List, Section, SubTitle, Title } from "../../styles";
import { ListImages } from "./styles";

import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";

const Galeria = () => {
  return (
    <Section bg="escuro" id="galeria">
      <Container bg="claro">
        <Title>Galeria ASCOP:</Title>
        <List>
          <li style={{ backgroundColor: "#384454" }}>
            <SubTitle>Fotos de Ação</SubTitle>
            <Desc>
              Confira os melhores cliques de skatistas em ação durante eventos e
              campeonatos.
            </Desc>
          </li>
          <li style={{ backgroundColor: "#384454" }}>
            <SubTitle>Vídeos Exclusivos</SubTitle>
            <Desc>
              Reviva os momentos mais emocionantes com vídeos de alta qualidade.
            </Desc>
          </li>
          <li style={{ backgroundColor: "#384454" }}>
            <SubTitle>Histórias Inspiradoras</SubTitle>
            <Desc>
              Conheça as trajetórias dos atletas que fazem parte da ASCOP.
            </Desc>
          </li>
        </List>
        <SubTitle style={{ marginTop: "40px" }}>Fotos:</SubTitle>
        <ListImages>
          <li>
            <img src={img1} alt="ai calica" />
          </li>
          <li>
            <img src={img2} alt="ai calica" />
          </li>
          <li>
            <img src={img3} alt="ai calica" />
          </li>
        </ListImages>
      </Container>
    </Section>
  );
};

export default Galeria;

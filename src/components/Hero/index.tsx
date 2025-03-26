import { Desc, Title } from "../../styles";
import { HeroContainer, Overlay, Image } from "./styles";

const Hero = () => {
  return (
    <HeroContainer>
      <Overlay />
      <Image>
        <Title className="title">
          ASCOP: O Coração do Skate em Florianópolis
        </Title>
        <Desc>
          A ASCOP (Associação de Skate de Florianópolis) é o seu ponto de
          encontro com a cultura do skate na ilha da magia.
          <br /> Junte-se à nossa comunidade!
        </Desc>
      </Image>
    </HeroContainer>
  );
};

export default Hero;

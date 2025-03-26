import { Desc, Section, Title } from "../../styles";

import logo from "../../assets/logo.jpeg";

const Ascop = () => {
  return (
    <Section
      id="ascop"
      style={{ display: "flex", gap: "60px", padding: "80px 240px" }}
      bg="claro"
    >
      <div>
        <Title className="title">Sobre a ASCOP</Title>
        <Desc className="desc">
          Bem-vindo à ASCOP! A Associação de Skate de Florianópolis promove e
          fortalece a cultura do skate na cidade, apoiando skatistas de todos os
          níveis. Organizamos eventos, campeonatos e projetos sociais, além de
          melhorar espaços para a prática do skate. Junte-se à nossa comunidade!
        </Desc>
      </div>
      <img style={{ height: "100%" }} src={logo} alt="Logo" />
    </Section>
  );
};

export default Ascop;

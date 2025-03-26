import { Container, Desc, List, Section, SubTitle, Title } from "../../styles";

const Sobre = () => {
  return (
    <Section bg="escuro" id="sobre">
      <Container bg="claro">
        <Title>Nossa História e Missão</Title>
        <List>
          <li>
            <SubTitle>Fundação e Objetivos</SubTitle>
            <Desc>
              Desde 2010, a ASCOP tem trabalhado para fortalecer o skate em
              Florianópolis, oferecendo oportunidades e suporte para skatistas
              de todos os níveis.
            </Desc>
          </li>
          <li>
            <SubTitle>Nossa Visão</SubTitle>
            <Desc>
              Acreditamos que o skate é mais do que um esporte; é um estilo de
              vida que conecta pessoas, transforma comunidades e promove a
              inclusão.
            </Desc>
          </li>
          <li>
            <SubTitle>Participe!</SubTitle>
            <Desc>
              Seja você um iniciante ou um profissional, a ASCOP está aqui para
              apoiar sua jornada no mundo do skate. Venha fazer parte da nossa
              família!
            </Desc>
          </li>
        </List>
      </Container>
    </Section>
  );
};

export default Sobre;

import { Container, Desc, List, Section, SubTitle, Title } from "../../styles";

const Eventos = () => {
  return (
    <Section bg="claro" id="eventos">
      <Container bg="escuro">
        <Title>Eventos ASCOP: Viva o Skate!</Title>
        <List>
          <li>
            <SubTitle>Campeonatos de Skate</SubTitle>
            <Desc>
              Competições emocionantes para skatistas de todas as categorias,
              desde iniciantes até profissionais.
            </Desc>
          </li>
          <li>
            <SubTitle>Skate Solidário</SubTitle>
            <Desc>
              Eventos para arrecadar alimentos e produtos de higiene, promovendo
              a solidariedade na comunidade.
            </Desc>
          </li>
          <li>
            <SubTitle>Treinos e Workshops</SubTitle>
            <Desc>
              Aulas para iniciantes e workshops de aperfeiçoamento para
              skatistas avançados.
            </Desc>
          </li>
        </List>
      </Container>
    </Section>
  );
};

export default Eventos;

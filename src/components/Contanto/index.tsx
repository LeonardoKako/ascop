import { Container, Desc, Section, SubTitle, Title } from "../../styles";
import { ListContacts } from "./styles";

import email from "../../assets/email.svg";
import face from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import phone from "../../assets/phone.svg";

const Contato = () => {
  const goTo = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Section id="contato" bg="claro">
      <Container bg="escuro">
        <Title>Fale Conosco!</Title>
        <ListContacts>
          <li>
            <div>
              <img src={email} alt="Email" />
              <SubTitle>Email</SubTitle>
            </div>
            <Desc>
              Envie suas dúvidas e sugestões para{" "}
              <span onClick={() => goTo("mailto:contato@ascopskate.com.br")}>
                contato@ascopskate.com.br
              </span>
              .
            </Desc>
          </li>
          <li>
            <div>
              <img src={insta} alt="Instagram" />
              <SubTitle>Instagram</SubTitle>
            </div>
            <Desc>
              Siga-nos em{" "}
              <span
                onClick={() => goTo("https://www.instagram.com/ascopfloripa/")}
              >
                @ascopfloripa
              </span>{" "}
              para ficar por dentro de todas as novidades.
            </Desc>
          </li>
          <li>
            <div>
              <img src={face} alt="Facebook" />
              <SubTitle>Facebook</SubTitle>
            </div>
            <Desc>
              Curta nossa página{" "}
              <span
                onClick={() => goTo("https://www.facebook.com/ascopfloripa")}
              >
                /ascopfloripa
              </span>{" "}
              e participe da comunidade.
            </Desc>
          </li>
          <li>
            <div>
              <img src={phone} alt="Telefone" />
              <SubTitle>Telefone</SubTitle>
            </div>
            <Desc>
              Ligue para <br />
              <span onClick={() => goTo("tel:+5548999999999")}>
                (48) 99999-9999
              </span>{" "}
              para falar diretamente conosco.
            </Desc>
          </li>
        </ListContacts>
      </Container>
    </Section>
  );
};

export default Contato;

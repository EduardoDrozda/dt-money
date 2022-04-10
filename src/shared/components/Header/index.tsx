import logoImg from "../../../assets/logo.svg";
import { Container, Content } from "./styles";

interface Props {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: Props) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}

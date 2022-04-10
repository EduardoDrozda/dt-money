import { useModal } from "../../contexts/ModalContext";
import { Header } from "../Header";

export const Layout: React.FC = ({ children }) => {
  const { handleOpenModal } = useModal();

  return (
    <>
      <Header onOpenModal={handleOpenModal} />
      {children}
    </>
  );
};

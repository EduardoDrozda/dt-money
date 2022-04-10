import { useModal } from "../../shared/contexts/ModalContext";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Summary } from "./components/Summary";
import { TransactionsTable } from "./components/TransactionsTable";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Container } from "./styles";

export default function Dashboard() {
  const { handleCloseModal, isModalOpen } = useModal();

  return (
    <TransactionsProvider>
      <Container>
        <Summary />
        <TransactionsTable />
      </Container>

      <NewTransactionModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </TransactionsProvider>
  );
}

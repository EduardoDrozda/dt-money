import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { ITransaction } from "../../../../shared/interfaces";
import { TransactionService } from "../../services/transaction.service";

interface TransactionsProps {
  transactions: ITransaction[];
  totalDeposits: number;
  totalWithdraws: number;
  totalValue: number;
  saveNewTransaction: (transaction: ITransaction) => void;
}

const TransactionsContext = createContext<TransactionsProps>(
  {} as TransactionsProps
);

const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalWithdraws, setTotalWithdraws] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const calculateValues = useCallback(() => {
    const deposits: ITransaction[] = [];
    const withdraws: ITransaction[] = [];

    transactions.forEach((transaction) => {
      if (transaction.type === "deposit") {
        deposits.push(transaction);
        return;
      }

      withdraws.push(transaction);
    });

    const totalWithdraw = calculateTransactionsAmount(withdraws);
    const totalDeposit = calculateTransactionsAmount(deposits);
    const total = totalDeposit - totalWithdraw;

    setTotalWithdraws(totalWithdraw);
    setTotalDeposits(totalDeposit);
    setTotalValue(total);
  }, [transactions]);

  function calculateTransactionsAmount(transactions: ITransaction[]) {
    let totalAmount = 0;

    transactions.forEach(({ amount }) => (totalAmount += amount));

    return totalAmount;
  }

  useLayoutEffect(() => {
    async function getTransactions() {
      const transactionService = new TransactionService();
      const { data } = await transactionService.getAllTransactions();
      setTransactions(data);
    }

    getTransactions();
  }, []);

  useEffect(() => {
    calculateValues();
  }, [calculateValues]);

  async function saveNewTransaction(data: ITransaction) {
    try {
      const payload = {
        id: transactions.length + 1,
        ...data,
      };

      const transactionService = new TransactionService();
      await transactionService.saveNewTransaction(payload);
      setTransactions([...transactions, payload]);
      alert("Transação salva com sucesso");
    } catch (_) {
      alert("Não foi possível salvar a transação");
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        totalDeposits,
        totalWithdraws,
        totalValue,
        saveNewTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

function useTransactions() {
  const context = useContext(TransactionsContext);

  if (!context) {
    throw new Error(
      "Contexto não encontrado, lembre-se o contexto useTransactions deve ser usado juntamento com o TransactionsProvider"
    );
  }

  return context;
}

export { TransactionsProvider, TransactionsContext, useTransactions };

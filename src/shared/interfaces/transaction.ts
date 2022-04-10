export interface ITransaction {
  id?: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: Date;
}

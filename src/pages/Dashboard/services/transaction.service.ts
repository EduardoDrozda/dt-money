import { ITransaction } from "../../../shared/interfaces";
import { IHttpService } from "../../../shared/services/http/http";
import { HttpService } from "../../../shared/services/http/http.service";

export class TransactionService {
  private readonly endpoint = "/transactions";
  private readonly http: IHttpService;

  constructor() {
    this.http = new HttpService();
  }

  async getAllTransactions() {
    return await this.http.get(this.endpoint);
  }

  async saveNewTransaction(payload: ITransaction) {
    return await this.http.post(this.endpoint, payload);
  }
}

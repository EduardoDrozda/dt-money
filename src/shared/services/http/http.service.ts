import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from "axios";
import enviroment from "../../../config/enviroments";
import { IHttpService } from "./http";

export class HttpService implements IHttpService {
  private http: AxiosStatic;

  constructor() {
    this.http = axios;
  }

  async get(
    endpoint: string,
    header?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const url = this.buildUrl(endpoint);
    return this.http.get(url, header);
  }

  private buildUrl(endpoint: string) {
    const { application } = enviroment;
    return `${application.apiUrl}${endpoint}`;
  }

  post(
    endpoint: string,
    payload: any,
    header?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<any, any>> {
    const url = this.buildUrl(endpoint);
    return this.http.post(url, payload, header);
  }
}

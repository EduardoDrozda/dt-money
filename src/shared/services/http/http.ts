import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IHttpService {
  get(endpoint: string, header?: AxiosRequestConfig): Promise<AxiosResponse>;
  post(
    endpoint: string,
    payload: any,
    header?: AxiosRequestConfig
  ): Promise<AxiosResponse>;
}

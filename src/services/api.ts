import axios from 'axios';

export type QueryParams = {
  [name: string]: string;
};

export default class ApiService {
  baseUrl = '';

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(routeParams: string[], queryParams: QueryParams): Promise<unknown> {
    let response = null;

    let url = this.baseUrl;

    if (routeParams) {
      url += `/${routeParams.join('/')}`;
    }

    try {
      response = await axios.get(url, { params: { ...queryParams } });
    } catch (err) {
      throw new Error(err.response);
    }

    return response;
  }

  async post(routeParams: string[], body: unknown): Promise<unknown> {
    let response = null;

    let url = this.baseUrl;

    if (routeParams) {
      url += `/${routeParams.join('/')}`;
    }

    try {
      response = await axios.post(url, body);
    } catch (err) {
      const errorMsg = err?.response?.data?.message;
      throw new Error(errorMsg);
    }

    return response;
  }
}

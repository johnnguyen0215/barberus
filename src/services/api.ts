export default class ApiService {
  baseUrl = '';

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(routeParams: string[], queryParams: string[]): Promise<unknown> {
    let response = null;

    let url = this.baseUrl;

    if (routeParams) {
      url += `/${routeParams.join('/')}`;
    }

    if (queryParams) {
      url += `?${queryParams.join('&')}`;
    }

    response = await fetch(url);

    const data = await response.json();

    return {
      data,
      headers: response.headers
    };
  }

  async post(routeParams: string[], body: unknown): Promise<unknown> {
    let response = null;

    let url = this.baseUrl;

    if (routeParams) {
      url += `/${routeParams.join('/')}`;
    }

    response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    const data = await response.json();

    return {
      data,
      headers: response.headers
    };
  }
}

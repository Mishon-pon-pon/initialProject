import ky, {Options} from 'ky';
import {HttpMethod} from './Enums';
import {IAPIModule} from './interfaces';

/**
 * Базовый модуль для работы с REST-api.
 */
export class APIModule implements IAPIModule {
  private readonly api: typeof ky;

  constructor(protected prefixUrl: string) {
    this.api = ky.create({
      prefixUrl,
      throwHttpErrors: false,
      credentials: 'same-origin',
    });
  }

  private async fetchData<P>(url: string, options: Options): Promise<P> {
    const response = await this.api(url, options);

    if (!response || (!response.ok && response.status >= 400)) {
    }

    let resp;
    try {
      resp = await response?.json();
    } catch (err) {}
    return resp;
  }

  async getData<P, R>(url: string, reqDTO?: R): Promise<P> {
    return await this.fetchData<P>(url, {
      method: HttpMethod.GET,
      searchParams: reqDTO as any,
    });
  }

  async putData<P>(url: string, reqDTO?: P): Promise<P> {
    return await this.fetchData<P>(url, {
      method: HttpMethod.PUT,
      json: reqDTO,
    });
  }

  async postData<P>(url: string, reqDTO?: P): Promise<P> {
    return await this.fetchData<P>(url, {
      method: HttpMethod.POST,
      json: reqDTO,
    });
  }

  async deleteData(url: string): Promise<void> {
    return await this.fetchData<void>(url, {
      method: HttpMethod.DELETE,
    });
  }

  async postFormData<P>(url: string, formData: FormData): Promise<P> {
    return await this.fetchData<P>(url, {
      method: HttpMethod.POST,
      body: formData,
    });
  }

  downloadFile(url: string): void {
    window.open(`${this.prefixUrl}/${url}`);
  }
}

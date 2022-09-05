import {Params} from 'router5/dist/types/base';

/**
 * Модуль для реализации запросов к серверу.
 */
export interface IAPIModule {
  /**
   * Метод GET запроса к серверному API.
   *
   * @param url
   */
  getData: <P>(url: string, reqDTO?: Params) => Promise<P>;

  /**
   * Метод POST запроса к серверному API.
   *
   * @param url
   */
  postData: <P>(url: string, reqDTO?: P) => Promise<P>;

  /**
   * Метод PUT запроса к серверному API.
   *
   * @param url
   */
  putData: <P>(url: string, reqDTO?: P) => Promise<P>;

  /**
   * Метод DELETE запроса к серверному API.
   *
   * @param url
   */
  deleteData: (url: string) => Promise<void>;

  /**
   * Метод отправки FormData к серверному API
   */
  postFormData: <P>(url: string, form: FormData) => Promise<P>;

  /**
   * Скачивание файлов.
   */
  downloadFile: (url: string) => void;
}

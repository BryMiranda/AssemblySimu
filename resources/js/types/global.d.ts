import { AxiosInstance } from 'axios';
import { route as routeFn } from 'ziggy-js';

declare global {
  interface Window {
      axios: AxiosInstance;
      hj?: (...args: any[]) => void;
      dataLayer: any[];
  }

  let route: typeof routeFn;
}

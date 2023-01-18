import { resources, defaultNS } from '../utils/i18n';

declare module './init-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['pt'];
  }
}
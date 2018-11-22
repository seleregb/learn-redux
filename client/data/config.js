import Raven from 'raven-js';

const sentry_key = '34191c6f74934ab68750154fcbe85e07';
const sentry_app = '1328893';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}

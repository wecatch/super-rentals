import Application from '@ember/application';
import SessionService from 'super-rentals/services/session';

export function initialize(application: Application) {
  application.register('route:session', SessionService, { singleton: true });
}

export default {
  initialize: initialize,
};

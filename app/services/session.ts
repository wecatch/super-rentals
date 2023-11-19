import Service from '@ember/service';

export default class SessionService extends Service {
  get userName() {
    return 'Nick';
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:session')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('session') declare altName: SessionService;`.
declare module '@ember/service' {
  interface Registry {
    session: SessionService;
  }
}

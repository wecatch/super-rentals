import { getOwner } from '@ember/owner';
import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AboutRoute extends Route {
  model() {
    return getOwner(this)?.lookup('service:session').userName;
  }
}

import Controller from '@ember/controller';

export default class TaskController extends Controller {
  queryParams = ['tag'];
  tag = null;
}

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { run, schedule } from '@ember/runloop';
import { action } from '@ember/object';

interface TaskListSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class TaskListComponent extends Component<TaskListSignature> {
  @tracked model: number[] = [];

  constructor() {
    super(...arguments);
    // this.model used in component TaskListComponent, but it had already been used previously in the same computation
    // 如果这调用
    // this.loadTask();
  }

  @action
  reloadTask() {
    console.log('reload task fire');
    this.loadTask();
    // schedule('afterRender', () => {
    //   this.loadTask();
    // });
  }

  @action
  loadTask() {
    console.log('load task fire');
    const task = [];
    console.log(this.model);
    for (let index = 0; index < 10; index++) {
      const num = index * Math.random() * 10;
      task.push(num);
    }
    this.model = [...task];
  }

  willDestroy(): void {
    super.willDestroy(...arguments);
    console.log('willdestroy');
  }
}

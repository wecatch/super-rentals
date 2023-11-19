import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface RentalImageSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class RentalImageComponent extends Component<RentalImageSignature> {
  @tracked isLarge: boolean = false;

  constructor(...args: unknown[]) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    super(...args);
    this.isLarge = false;
  }

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}

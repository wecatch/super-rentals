import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

interface MapSignature {
  // The arguments accepted by the component
  Args: {
    lat: string;
    lng: string;
    zoom: string;
    width: string;
    height: string;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class MapComponent extends Component<MapSignature> {
  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}

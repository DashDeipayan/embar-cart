import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FloorComponent extends Component {
  @tracked floorCount = 3;
}

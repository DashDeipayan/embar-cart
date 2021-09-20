import Controller from '@ember/controller';

let floorCount = 5;
function floorListitfy(floorCount) {
  let floorList = [];
  let t = 0;
  while (t <= floorCount) {
    floorList.push(t);
    t++;
  }
  return floorList;
}

export default class IndexController extends Controller {
  floorList = floorListitfy(floorCount).reverse();
}

import Controller from '@ember/controller';
import { action } from '@ember/object'

export default class ApplicationController extends Controller {

  @action
  loadLodashChunk() {
    import('lodash-es')
      .then(m => console.log(m.capitalize('it doesn`t work')));
  }
}

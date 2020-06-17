import Component from '../lib/component.js';
import store from '../store/index.js';

/* we only need to inherit base component store and element ,
no render function here*/
export default class Status extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.js-status')
        });
    }

    // render() {
    //     //let self = this;
    //     let suffix = store.state.items.length !== 1 ? 's' : '';

    //     this.element.innerHTML = `${store.state.items.length} item${suffix}`;
    // }
}
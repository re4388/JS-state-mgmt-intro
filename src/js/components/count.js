import Component from '../lib/component.js';
import store from '../store/index.js';

/* In thie simple case, we only need to have 2 things get from base
component, one is store, for state mgmt, another is where our component
can bind to view */
export default class Count extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.js-count')
        });
    }
    render() {
        let suffix = store.state.items.length !== 1 ? 's' : '';
        this.element.innerHTML = `
        <small>You have</small>
            ${store.state.items.length}
        <small>task${suffix} today </small>
    `;
    }
}
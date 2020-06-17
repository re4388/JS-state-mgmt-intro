import Store from '../store/store.js';

/* this is the base component */
export default class Component {
    constructor(props = {}) {
        // in case the child component have no render method
        this.render = this.render || function() {};
        // make sure the store is the correct type
        if (props.store instanceof Store) {
            //we will subscribe stateChange event
            props.store.events.subscribe('stateChange', () => this.render());
        }
        // check if we have element property, if we don't have, provide one
        if (props.hasOwnProperty('element')) {
            this.element = props.element;
        }
    }
}
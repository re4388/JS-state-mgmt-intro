# Managing application state in Javascript


> This is the forked repo by which I can learn how to implement my own Vue store state management

## Original Author Tutorial
https://dev.to/bnevilleoneill/state-management-pattern-in-javascript-sharing-data-across-components-2gkj


## What I learn



> *we use publish and subscribe model to let base component and Store communicate*

> *we use Store to manage our state through Event Flow*

### Event Flow for state memt
Event -> Event dispatch action with/without payload -> Store instance(context) commit a particular action -> that particular action commit and mutate state

- action type is what developer defined, like addItem or clearItem
- so commit action code is like, context.commit('addItem', payload)
- context is instance of store
- mutaiton state meaning change old state to new state
- we use action object to hold all actions (method) type, which will trigger commit method(defined in Store)
- we use mutation object to hold code logic (method) on change operations

> In this JS code, we bascailly see three parts of code

### code developer write
- setup your own actions.js and muation.js since you only know what kind of action type you want in app
- liek action and mutation obj hold action type, like addItem callback..etc
- init a new Store instance with actions, mutations and state objects,
- state object hold what states you want to mgmt
- Init the state, which will used when we also need to init a new Store instance
- in this example, we use vanilla JS to also build up 3 component, count, list and status without framework

### code framework maker write
- we setup a component base, which have render method, init element prop and store prop.
- in this store prop, it also subscribe the 'stateChange' event which will got notify when state change


###  code state mgmt maker write
- setup PubSub class, which have events object in construcor and 2 method, subscrib and publish
- we use this to subscribe event with cb and publish event with data, we have only one event in this example
- setup store class, incl. dispatch and commit method implementation
- the key is the state prop in Store will use Proxy to publish stateChange event
- we use Proxy "set" trap when we set state.
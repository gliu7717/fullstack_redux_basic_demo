// src/redux_demo.js
//const redux = require('redux');
import {legacy_createStore as createStore} from 'redux'

// REDUCER
const counterReducer = (state = {counter:0}, action) =>{
    return {
        counter:state.counter+1
    }
}
// STORE
const store = createStore(counterReducer);
console.log(store.getState())


// DISPATCHING ACTION

// SUBSCRIPTION
const counterSubscriber = ()=>{
    const latestState = store.getState()
    console.log(latestState)
}
store.subscribe(counterSubscriber)
store.dispatch({type:'increment'})
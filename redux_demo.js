// src/redux_demo.js
//const redux = require('redux');
import {legacy_createStore as createStore} from 'redux'

// REDUCER
const counterReducer = (state = {counter:0}, action) =>{
    if(action.type === "increment"){
        return {
            counter:state.counter+1
        }    
    }
    if(action.type === "decrement"){
        return {
            counter:state.counter - 1
        }    
    }
    return state
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
store.dispatch({type:'decrement'})
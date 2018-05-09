import { createStore } from 'redux';
const store = createStore(fn);
const state = store.getState();
// const action = {
//     type: 'ADD_TODO',
//     payload: 'Learn Redux'
// }
const ADD_TODO = 'to add todo';

function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

const action = addTodo('Learn Redux')

const reducer = function (state, action) {
    return new_state;
}

const defaultState = 0;
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        default:
            return state;
    }
}

const state = reducer(1,{
    type: 'ADD',
    payload: 2
});

store.subscribe(listener);
stor
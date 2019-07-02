import { takeEvery, put } from 'redux-saga/effects'
// import { delay } from 'redux-saga';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* addTodoAsync(action) {
    yield delay(3000)
    yield put({type: 'ADD_TODO', text: action.text, id: action.id})
}

export function* watchIncrementAsync() {
    yield takeEvery('ADD_TODO_ASYNC', addTodoAsync)
}
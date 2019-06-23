
//createStore
function createStore(reducer, initialState) {
 // currentState就是那个数据
 let currentState = initialState;
 let listener = () => {};
 
 function getState() {
   return currentState;
 }
 function dispatch(action) {
   currentState = reducer(currentState, action); // 更新数据
   listener(); // 执行订阅函数
   return action;
 }
 function subscribe(newListener) {
   listener = newListener;
   // 取消订阅函数
   return function unsubscribe() {
    listener = () => {};
   };
 }
 return {
   getState: getState,
   dispatch: dispatch,
   subscribe: subscribe
 };
};
//action func
function addTodo(text){
	return {type: 'ADD_TODO', text: text}
};

//reducer
function todos(state=[], action) {
  return [
    ...state,
    {
      text: action.text,
      completed: false
    }
  ]
}
function todoApp(state={}, action) {
  return {
    todos: todos(state.todos, action)
  }
}
 
const store = createStore(todoApp,{todos:[{text: 'hello redux', completed: false}]});
console.log(store.getState()); // 获取数据
const unsubscribe = store.subscribe(()=>{
  console.log(store.getState())
}); // 注册订阅函数

store.dispatch(addTodo('hello word'));

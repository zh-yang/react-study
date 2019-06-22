const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

function addTodo(text) {
	return {type: 'ADD_TODO', text}
}
function toggleTodo(index) {
	return {type: 'TOGGLE_TODO', index}
}
function setVisibilityFilter(filter) {
  return { type: 'SET_VISIBILITY_FILTER', filter }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

function todos(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map((todo, index) => {
				if (index === action.index) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
				return todo
			})
		default:
			return state
	}
}

const todoApp = window.Redux.combineReducers({
	visibilityFilter,
	todos
})

let store = window.Redux.createStore(todoApp)

console.log('初始状态', store.getState())

const unsubscribe = store.subscribe(()=>console.log(store.getState()))

//发起一系列action
console.log('add0')
store.dispatch(addTodo('Learn about actions'))
console.log('add1')
store.dispatch(addTodo('Learn about reducers'))
console.log('add2')
store.dispatch(addTodo('Learn about store'))
console.log('toggle0')
store.dispatch(toggleTodo(0))
console.log('toggle1')
store.dispatch(toggleTodo(1))
console.log('SHOW_COMPLETED')
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
console.log('注销')
unsubscribe();
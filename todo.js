function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

function addTodo(text) {
	return { type: 'ADD_TODO', text: text };
}
function toggleTodo(index) {
	return { type: 'TOGGLE_TODO', index: index };
}
function setVisibilityFilter(filter) {
	return { type: 'SET_VISIBILITY_FILTER', filter: filter };
}

function visibilityFilter() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
	var action = arguments[1];

	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
}

function todos() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case 'ADD_TODO':
			return [].concat(_toConsumableArray(state), [{
				text: action.text,
				completed: false
			}]);
		case 'TOGGLE_TODO':
			return state.map(function (todo, index) {
				if (index === action.index) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					});
				}
				return todo;
			});
		default:
			return state;
	}
}

var todoApp = window.Redux.combineReducers({
	visibilityFilter: visibilityFilter,
	todos: todos
});

var store = window.Redux.createStore(todoApp);

console.log('初始状态', store.getState());

var unsubscribe = store.subscribe(function () {
	return console.log(store.getState());
});

//发起一系列action
console.log('add0');
store.dispatch(addTodo('Learn about actions'));
console.log('add1');
store.dispatch(addTodo('Learn about reducers'));
console.log('add2');
store.dispatch(addTodo('Learn about store'));
console.log('toggle0');
store.dispatch(toggleTodo(0));
console.log('toggle1');
store.dispatch(toggleTodo(1));
console.log('SHOW_COMPLETED');
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
console.log('注销');
unsubscribe();
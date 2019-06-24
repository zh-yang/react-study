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
/*
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
*/

function Todo(onClick, completed, text) {
	return React.createElement(
		'li',
		{ onClick: onClick,
			style: {
				textDecoration: completed ? 'line-through' : 'none'
			}
		},
		text
	);
}

var TodoList = function TodoList(_ref) {
	var todos = _ref.todos,
	    onTodoClick = _ref.onTodoClick;
	return React.createElement(
		'ul',
		null,
		todos.map(function (todo, index) {
			return React.createElement(Todo, Object.assign({ key: index
			}, todos, {
				onClick: function onClick() {
					return onTodoClick(index);
				}
			}));
		})
	);
};

function Link(active, children, _onClick) {
	if (active) {
		return React.createElement(
			'span',
			null,
			children
		);
	}

	return React.createElement(
		'a',
		{ href: '',
			onClick: function onClick(e) {
				e.preventDefault();
				_onClick();
			}
		},
		children
	);
}

function Footer() {
	React.createElement(
		'p',
		null,
		'Show\uFF1A',
		React.createElement(
			FilterLink,
			{ filter: 'SHOW_ALL' },
			'All'
		),
		React.createElement(
			FilterLink,
			{ filter: 'SHOW_ACTIVE' },
			'Active'
		),
		React.createElement(
			FilterLink,
			{ filter: 'SHOW_COMPLETED' },
			'Completed'
		)
	);
}
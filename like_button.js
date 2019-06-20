'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return 'You liked this.';
      }

      return React.createElement(
        'button',
        { onClick: function onClick() {
            return _this2.setState({ liked: true });
          } },
        'Like'
      );
    }
  }]);

  return LikeButton;
}(React.Component);
/* 重新渲染 */


var domContainer = document.querySelector('#like_button_container');
function tick() {
  var element = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'xxxxxxxxx'
    ),
    React.createElement(
      'h2',
      null,
      'It is ',
      new Date().toLocaleTimeString(),
      '.'
    )
  );
  ReactDOM.render(element, domContainer);
}
// setInterval(tick, 1000)

/* 组合 */
function Welcome(props) {
  props.name += '-07';
  return React.createElement(
    'h1',
    null,
    'Hello, ',
    props.name
  );
}

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Welcome, { name: 'Wade' }),
    React.createElement(Welcome, { name: 'James' }),
    React.createElement(Welcome, { name: 'curry' })
  );
}

/* state */

var Clock = function (_React$Component2) {
  _inherits(Clock, _React$Component2);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this3 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this3.state = { date: new Date() };
    return _this3;
  }

  _createClass(Clock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      this.timerTD = setInterval(function () {
        _this4.tick();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerTD);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Hello, world!'
        ),
        React.createElement(
          'h2',
          null,
          'It is ',
          this.state.date.toLocaleTimeString(),
          '.'
        )
      );
    }
  }]);

  return Clock;
}(React.Component);
// ReactDOM.render(
//   <Clock />,
//   domContainer
// );


/* 事件 */


var Toggle = function (_React$Component3) {
  _inherits(Toggle, _React$Component3);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this5 = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this5.state = { isToggleOn: true };
    _this5.handleClick = _this5.handleClick.bind(_this5);
    return _this5;
  }

  _createClass(Toggle, [{
    key: 'handleClick',
    value: function handleClick() {
      console.log(this);

      this.setState(function (state) {
        return { isToggleOn: !state.isToggleOn };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { onClick: this.handleClick },
        this.state.isToggleOn ? 'ON' : 'OFF'
      );
    }
  }]);

  return Toggle;
}(React.Component);
// ReactDOM.render(<Toggle />, domContainer)

/* 条件渲染 */


function UserGreeting(props) {
  return React.createElement(
    'h1',
    null,
    'Welcome back!'
  );
}
function GuestGreeting(props) {
  return React.createElement(
    'h1',
    null,
    'Please sign up.'
  );
}
function Greeting(props) {
  var isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? React.createElement(UserGreeting, null) : React.createElement(GuestGreeting, null);
}

function LoginButton(props) {
  return React.createElement(
    'button',
    { onClick: props.onClick },
    'Login'
  );
}
function LogoutButton(props) {
  return React.createElement(
    'button',
    { onClick: props.onClick },
    'Logout'
  );
}

var LoginControl = function (_React$Component4) {
  _inherits(LoginControl, _React$Component4);

  function LoginControl(props) {
    _classCallCheck(this, LoginControl);

    var _this6 = _possibleConstructorReturn(this, (LoginControl.__proto__ || Object.getPrototypeOf(LoginControl)).call(this, props));

    _this6.state = { isLoggedIn: false };
    _this6.handleLoginClick = _this6.handleLoginClick.bind(_this6);
    _this6.handleLogoutClick = _this6.handleLogoutClick.bind(_this6);
    return _this6;
  }

  _createClass(LoginControl, [{
    key: 'handleLoginClick',
    value: function handleLoginClick() {
      this.setState({ isLoggedIn: true });
    }
  }, {
    key: 'handleLogoutClick',
    value: function handleLogoutClick() {
      this.setState({ isLoggedIn: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var isLoggedIn = this.state.isLoggedIn;
      var button = void 0;
      if (isLoggedIn) {
        button = React.createElement(LogoutButton, { onClick: this.handleLogoutClick });
      } else {
        button = React.createElement(LoginButton, { onClick: this.handleLoginClick });
      }
      return React.createElement(
        'div',
        null,
        React.createElement(Greeting, { isLoggedIn: isLoggedIn }),
        button
      );
    }
  }]);

  return LoginControl;
}(React.Component);

// ReactDOM.render(
//   <LoginControl />,
//   domContainer
// )

/* 阻止渲染 */


function WraningBanner(props) {
  if (!props.wran) {
    return null;
  }

  return React.createElement(
    'div',
    null,
    'Warning!'
  );
}

var Page = function (_React$Component5) {
  _inherits(Page, _React$Component5);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this7 = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this7.state = { showWarning: true };
    _this7.handleToggleClick = _this7.handleToggleClick.bind(_this7);
    return _this7;
  }

  _createClass(Page, [{
    key: 'handleToggleClick',
    value: function handleToggleClick() {
      this.setState(function (state) {
        return {
          showWarning: !state.showWarning
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(WraningBanner, { wran: this.state.showWarning }),
        React.createElement(
          'button',
          { onClick: this.handleToggleClick },
          this.state.showWarning ? 'Hide' : 'Show'
        )
      );
    }
  }]);

  return Page;
}(React.Component);
// ReactDOM.render(<Page />, domContainer)

/* 受控组件 */


var FlavorForm = function (_React$Component6) {
  _inherits(FlavorForm, _React$Component6);

  function FlavorForm(props) {
    _classCallCheck(this, FlavorForm);

    var _this8 = _possibleConstructorReturn(this, (FlavorForm.__proto__ || Object.getPrototypeOf(FlavorForm)).call(this, props));

    _this8.state = { value: ['coconut', '1'] };

    _this8.handleChange = _this8.handleChange.bind(_this8);
    _this8.handleSubmit = _this8.handleSubmit.bind(_this8);
    return _this8;
  }

  _createClass(FlavorForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      console.log(event.target.value);
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      alert('你喜欢的风味是：' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'label',
          null,
          '\u9009\u62E9\u4F60\u559C\u6B22\u7684\u98CE\u5473\uFF1A',
          React.createElement(
            'select',
            { multiple: true, value: this.state.value, onChange: this.handleChange },
            React.createElement(
              'option',
              { value: '1' },
              '\u8461\u8404\u67DA'
            ),
            React.createElement(
              'option',
              { value: '2' },
              '\u67E0\u6AAC'
            ),
            React.createElement(
              'option',
              { value: '3' },
              '\u8292\u679C'
            ),
            React.createElement(
              'option',
              { value: 'coconut' },
              '\u6930\u5B50'
            )
          )
        ),
        React.createElement('input', { type: 'submit', value: '\u63D0\u4EA4' })
      );
    }
  }]);

  return FlavorForm;
}(React.Component);

ReactDOM.render(React.createElement(FlavorForm, null), domContainer);

// ReactDOM.render(<App />, domContainer)
// ReactDOM.render(<LikeButton />, domContainer);
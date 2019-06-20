'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}
/* 重新渲染 */
let domContainer = document.querySelector('#like_button_container');
function tick() {
  const element = (
    <div>
      <h1>xxxxxxxxx</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(element, domContainer)
}
// setInterval(tick, 1000)

/* 组合 */
function Welcome(props) {
  props.name += '-07';
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return (
    <div>
      <Welcome name="Wade" />
      <Welcome name="James" />
      <Welcome name="curry" />
    </div>
  )
}

/* state */
class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerTD = setInterval(()=>{
      this.tick();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerTD)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
// ReactDOM.render(
//   <Clock />,
//   domContainer
// );


/* 事件 */
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    
    this.setState(state=>({isToggleOn: !state.isToggleOn }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}
// ReactDOM.render(<Toggle />, domContainer)

/* 条件渲染 */
function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    isLoggedIn ? <UserGreeting /> : <GuestGreeting />
  )
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

// ReactDOM.render(
//   <LoginControl />,
//   domContainer
// )

/* 阻止渲染 */
function WraningBanner(props) {
  if(!props.wran) {
    return null;
  }

  return (
    <div>
      Warning!
    </div>
  )
}
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }
  render() {
    return (
      <div>
        <WraningBanner wran={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}
// ReactDOM.render(<Page />, domContainer)

/* 受控组件 */
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ['coconut','1']};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value)
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('你喜欢的风味是：' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味：
          <select multiple={true} value={this.state.value} onChange={this.handleChange}>
            <option value="1">葡萄柚</option>
            <option value="2">柠檬</option>
            <option value="3">芒果</option>
            <option value="coconut">椰子</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

ReactDOM.render(<FlavorForm />, domContainer)

// ReactDOM.render(<App />, domContainer)
// ReactDOM.render(<LikeButton />, domContainer);
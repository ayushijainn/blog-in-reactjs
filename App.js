import React from "react";
import reactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';

//import TransitionGroup from "react-transition-group";

//import FadeTransition from "fadeTransition";

const Home = () => (
      <div>
        Home
      </div>
    )

    const About = () => (
      <div>
        About
      </div>
    )

    

    const Contact = () => (
      <div>
        Contact
      </div>
    )

    const info = () => (
      <div>
        info
      </div>
    )

const MainMenu = () => {
    return (
     <div className="buttons">
      <Link to="/">
        <button type="button" className="menu-btn">home</button>
      </Link>
      <Link to="/about">
        <button type="button" className="menu-btn">About</button>
      </Link>
      
      <Link to="/contact">
        <button type="button" className="menu-btn">contact</button>
      </Link>
      <Link to="/info">
        <button type="button" className="menu-btn">info</button>
      </Link>
    </div>
  );
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  
   

  render() {

    return (
      <div className="root-container">
       <Helmet bodyAttributes={{style: 'background-color:#073739;'}}/>

        <div className="box-controller">
          <div
            className={"controller " + (this.state.isLoginOpen
            ? "selected-controller"
            : "")}
            onClick={this
            .showLoginBox
            .bind(this)}>
            Login
          </div>
          <div
            className={"controller " + (this.state.isRegisterOpen
            ? "selected-controller"
            : "")}
            onClick={this
            .showRegisterBox
            .bind(this)}>
            Register
          </div>
        </div>
 
        <div className="box-container">
       {this.state.isLoginOpen && <LoginBox/>}
       {this.state.isRegisterOpen && <RegisterBox/>}
       </div>
       <Router>
       <div className="mainmenu">
        <MainMenu/>
       </div> 

      

      
        <div className="linking">
        
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/presence" component={info} />
            
          </div>
          </Router>
     </div>
       
    );

  }

}

class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Login
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitLogin
            .bind(this)}>Login</button>
        </div>
      </div>
    );
  }

}
class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="login-input" placeholder="Email"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitRegister
            .bind(this)}>Register</button>
        </div>
      </div>
    );
  }
}
reactDOM.render(
  <App/>, document.getElementById("root"));
export default App;
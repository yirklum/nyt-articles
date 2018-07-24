
import React from "react";
// import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import * as Home from "./pages/Home";
// import { Container } from "./components/Grid";


// const App = () => (<Home />);


// class App extends Component {
//   render() {
//     return (
      
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h1 className="App-title">NYT Article Search</h1>
//         </header>
//         <p className="App-intro">
//           <Search />
//         </p>
//       </div>
//     );
//   }
// }

const App = () => (
  <Router>
    <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id" component={Home} />
        </Switch>
    </div>
  </Router>
);



export default App;

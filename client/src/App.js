
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import { Container } from "./components/Grid";

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
    <div className="container">
      <Container fluid>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Home} />
          <Route exact path="/articles/:id" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Container>  
    </div>
  </Router>
);



export default App;

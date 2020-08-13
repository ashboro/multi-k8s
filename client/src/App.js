import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Epicview Technology Info - React Version 1.2</h1>
            <Link className="App-link" to="/">Home</Link>
            <span>&nbsp; &nbsp;&nbsp; || &nbsp;&nbsp;</span>
            <Link className="App-link" to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>

          <div>    
          <table id="location" border='1'>
              <tr>
                <tr>

                    <th width="30%">Name                      </th>
                    <th width="30%">Price                     </th>
                    <th width="30%">Category                  </th>
                </tr>
              </tr>
          </table>
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;

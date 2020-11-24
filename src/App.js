import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Explore from "./components/content/Explore";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Encrypt from "./components/content/Encrypt";
import Decrypt from "./components/content/Decrypt";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Explore} />
           <Route  path="/login" component={Login} />
            <Route  path="/encrypt" component={Encrypt} />
            <Route path="/decrypt" component={Decrypt} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

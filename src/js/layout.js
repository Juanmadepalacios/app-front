import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import Details from "./views/Details";
import Register from "./views/Register";
import injectContext from "./store/appContext";

class Layout extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column h-100">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/tasks" component={Home} />
            <Route path="/tasks/:theid" component={Details} />
            <Route render={() => <h1>Esta página no existe :(</h1>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default injectContext(Layout);
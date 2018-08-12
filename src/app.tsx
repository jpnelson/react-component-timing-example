import * as React from "react";
import "./app.css";

import { ComponentTimingRoot } from "react-component-timing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CurrencyPage } from "./currency-page";
import { Navigation } from "./navigation";

export class App extends React.Component {
  public render() {
    return (
      <div>
        <ComponentTimingRoot reporter={window.console.log}>
          <Router>
            <div>
              <Navigation />

              <hr />

              <Route
                exact={true}
                path="/currency/:currency"
                component={CurrencyPage}
              />
            </div>
          </Router>
        </ComponentTimingRoot>
      </div>
    );
  }
}

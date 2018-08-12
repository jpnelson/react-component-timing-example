import * as React from "react";
import "./app.css";

import { ComponentTimingRoot, ITimingEvent } from "react-component-timing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CurrencyPage } from "./currency-page";
import { Navigation } from "./navigation";

export class App extends React.Component {
  public render() {
    return (
      <div>
        <ComponentTimingRoot reporter={this.report}>
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

  private report(loadingData: ITimingEvent) {
    window.console.log("RCT", loadingData);
  }
}

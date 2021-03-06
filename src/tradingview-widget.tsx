import * as React from "react";
import { ComponentTiming } from "react-component-timing";

interface IOwnProps {
  currency: string;
}

interface IOwnState {
  isLoaded: boolean;
}

export class TradingviewWidget extends React.Component<IOwnProps, IOwnState> {
  public state = {
    isLoaded: false
  };

  public componentDidMount() {
    this.setState({
      isLoaded: false
    });
  }

  public componentWillUnmount() {
    this.setState({
      isLoaded: false
    });
  }

  public render() {
    return (
      <ComponentTiming
        id="tradingview-widget"
        isSelfLoaded={this.state.isLoaded}
      >
        <iframe
          height="720"
          src="https://www.myforexwidgets.com/allwidgets/currency-converter/?color=blue"
          width="100%"
          onLoad={this.setLoaded}
        />
      </ComponentTiming>
    );
  }

  private setLoaded = () => {
    this.setState({
      isLoaded: true
    });
  };
}

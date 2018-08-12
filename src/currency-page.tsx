import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { CurrencyProvider, IPriceData } from "./providers/price-provider";
import { TradingviewWidget } from "./tradingview-widget";

interface IRouteProps {
  currency: string;
}

export class CurrencyPage extends React.Component<
  RouteComponentProps<IRouteProps>
> {
  public render() {
    window.console.log(this.props.match.params.currency);
    return (
      <CurrencyProvider
        currency={this.props.match.params.currency}
        render={this.getPage}
      />
    );
  }
  private getPage(priceData: IPriceData) {
    if (priceData.isLoading || !priceData.data) {
      return <span>Loading...</span>;
    }
    return (
      <React.Fragment>
        <h1>{priceData.data && priceData.data.currency}</h1>
        <span>Current price: {priceData.data.amount}</span>
        <h2>Tradingview</h2>
        <TradingviewWidget currency={priceData.data.currency} />
      </React.Fragment>
    );
  }
}

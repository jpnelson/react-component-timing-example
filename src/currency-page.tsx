import * as React from "react";
import { ComponentTiming, ILoadingStates } from "react-component-timing";
import { RouteComponentProps } from "react-router-dom";
import { LoadingElement } from "./loading-element";
import { CurrencyProvider, IPriceData } from "./providers/price-provider";
import { TradingviewWidget } from "./tradingview-widget";

interface IRouteProps {
  currency: string;
}

export class CurrencyPage extends React.Component<
  RouteComponentProps<IRouteProps>
> {
  public render() {
    return (
      <CurrencyProvider
        currency={this.props.match.params.currency}
        render={this.getPage}
      />
    );
  }
  private getPage = (priceData: IPriceData) => {
    if (priceData.isLoading || !priceData.data) {
      return (
        <ComponentTiming
          id="currency-page"
          isSelfLoaded={false}
          isLoaded={this.isLoaded}
        >
          <span>Loading...</span>
        </ComponentTiming>
      );
    }
    return (
      <ComponentTiming
        id="currency-page"
        isSelfLoaded={true}
        isLoaded={this.isLoaded}
      >
        <React.Fragment>
          <h1>{priceData.data && priceData.data.currency}</h1>
          <p>Current price for one BTC: {priceData.data.amount}</p>
          <LoadingElement id="curreny-image" render={this.renderLoadingImage} />
          <h2>Tradingview</h2>
          <TradingviewWidget currency={priceData.data.currency} />
        </React.Fragment>
      </ComponentTiming>
    );
  };

  private renderLoadingImage = (onLoad: () => void) => {
    return (
      <img
        width="100"
        height="100"
        src={`http://via.placeholder.com/3000x3000/fff/000?text=${
          this.props.match.params.currency
        }/BTC`}
        alt="currency logo"
        onLoad={onLoad}
      />
    );
  };

  private isLoaded = (
    isSelfLoaded: boolean,
    childLoadingStates: ILoadingStates
  ) => {
    return (
      isSelfLoaded &&
      childLoadingStates["tradingview-widget"] &&
      childLoadingStates["curreny-image"]
    );
  };
}

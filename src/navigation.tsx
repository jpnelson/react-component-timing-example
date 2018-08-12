import * as React from "react";
import { ComponentTiming } from "react-component-timing";
import { Link } from "react-router-dom";
import { CurrencyProvider, ICurrencyData } from "./providers/currency-provider";

export class Navigation extends React.Component {
  public render() {
    return <CurrencyProvider render={this.getNavigation} />;
  }

  private getNavigation({ isLoading, data }: ICurrencyData) {
    if (isLoading) {
      return (
        <ComponentTiming id="navigation" isSelfLoaded={false}>
          <span>Loading</span>
        </ComponentTiming>
      );
    }
    const navigationCurrencies = data.filter((_, i) => i < 20);

    return (
      <ComponentTiming id="navigation" isSelfLoaded={true}>
        <ul>
          {navigationCurrencies.map(currency => (
            <li key={currency.id}>
              <Link to={`/currency/${currency.id}`}>{currency.name}</Link>
            </li>
          ))}
        </ul>
      </ComponentTiming>
    );
  }
}

import * as React from "react";

interface ICurrencyData {
  isLoading: boolean;
  data: object;
}

interface IOwnProps {
  render: (currencyData: ICurrencyData) => JSX.Element;
}

export class CurrencyProvider extends React.Component<IOwnProps> {
  public render() {
    return this.props.render({ isLoading: true, data: {} });
  }
}

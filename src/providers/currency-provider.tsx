import * as React from "react";
import { Currencies, getCurrencies } from "../api/get-currencies";

export interface ICurrencyData {
  isLoading: boolean;
  data: Currencies;
}

interface IOwnProps {
  render: (currencyData: ICurrencyData) => JSX.Element;
}

interface IOwnState {
  currencyData: ICurrencyData;
}

export class CurrencyProvider extends React.Component<IOwnProps, IOwnState> {
  public state = {
    currencyData: {
      data: [],
      isLoading: true
    }
  };

  public componentDidMount() {
    this.getCurrencyData();
  }

  public render() {
    return this.props.render({
      data: this.state.currencyData.data,
      isLoading: this.state.currencyData.isLoading
    });
  }

  private async getCurrencyData() {
    this.setState({
      currencyData: {
        data: this.state.currencyData.data,
        isLoading: true
      }
    });
    const currencyData = await getCurrencies();
    this.setState({
      currencyData: {
        data: currencyData,
        isLoading: false
      }
    });
  }
}

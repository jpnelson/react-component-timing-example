import * as React from "react";
import { getPrice, IPrice } from "../api/get-price";

export interface IPriceData {
  isLoading: boolean;
  data: IPrice | null;
}

interface IOwnProps {
  currency: string;
  render: (priceData: IPriceData) => JSX.Element;
}

interface IOwnState {
  priceData: IPriceData;
}

export class CurrencyProvider extends React.Component<IOwnProps, IOwnState> {
  public state = {
    priceData: {
      data: null,
      isLoading: true
    }
  };

  public componentDidMount() {
    this.getPriceData(this.props.currency);
  }

  public componentWillReceiveProps(nextProps: IOwnProps) {
    if (this.props.currency === nextProps.currency) {
      return;
    }
    this.getPriceData(nextProps.currency);
  }

  public render() {
    return this.props.render({
      data: this.state.priceData.data,
      isLoading: this.state.priceData.isLoading
    });
  }

  private async getPriceData(currency: string) {
    this.setState({
      priceData: {
        data: this.state.priceData.data,
        isLoading: true
      }
    });
    const priceData = await getPrice(currency);
    this.setState({
      priceData: {
        data: priceData,
        isLoading: false
      }
    });
  }
}

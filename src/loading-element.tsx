import * as React from "react";
import { ComponentTiming } from "react-component-timing";

type OnLoad = () => void;

interface IOwnProps {
  id: string;
  render: (onLoad: OnLoad) => JSX.Element;
}

interface IOwnState {
  isLoaded: boolean;
}

export class LoadingElement extends React.Component<IOwnProps, IOwnState> {
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
      <ComponentTiming id={this.props.id} isSelfLoaded={this.state.isLoaded}>
        {this.props.render(this.onLoad)}
      </ComponentTiming>
    );
  }

  private onLoad = () => {
    this.setState({
      isLoaded: true
    });
  };
}

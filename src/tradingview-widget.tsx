import * as React from "react";

interface IOwnProps {
  currency: string;
}

export class TradingviewWidget extends React.Component<IOwnProps> {
  public render() {
    return (
      <iframe
        height="720"
        src="https://www.myforexwidgets.com/allwidgets/currency-converter/?color=blue"
        width="100%"
      />
    );
  }
}

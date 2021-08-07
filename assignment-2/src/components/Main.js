import React, { PureComponent } from "react";
import CounterContent from "./CounterContent";

class Main extends PureComponent {
  render() {
    const counters = [1, 2, 3, 4];
    console.log("PureComponent Rendered");
    return (
      <>
        {counters.map((counters) => (
          <div key={counters}>
            <CounterContent id={counters} />
          </div>
        ))}
      </>
    );
  }
}

export default Main;

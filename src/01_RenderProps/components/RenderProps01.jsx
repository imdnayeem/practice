import Button from "@material-ui/core/Button";

import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

function RenderProps01() {
  return (
    <div className="App">
      {/* <ClickCounter />
      <HoverCounter />
      <User render={(e) => (e ? "Nayeem" : "Guest")} /> */}
      <Counter
        render={(count, handleIncrement) => (
          <ClickCounter
            count={count}
            handleIncrement={handleIncrement}
          ></ClickCounter>
        )}
      />
      <Counter
        render={(count, handleIncrement) => (
          <HoverCounter
            count={count}
            handleIncrement={handleIncrement}
          ></HoverCounter>
        )}
      />
    </div>
  );
}

export default RenderProps01;

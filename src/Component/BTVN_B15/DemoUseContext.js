import React, { createContext, useContext } from "react";

const ExampleContext = createContext();

const DemoUseContext = () => {
  return (
    <div>
      <ExampleContext.Provider value={{ number: 10 }}>
        <Child />
        <Child2 />
      </ExampleContext.Provider>
    </div>
  );
};

const Child2 = () => {
  const context = useContext(ExampleContext);
  console.log("context", context);

  return (
    <div>
      <h1>Child2</h1>
    </div>
  );
};
const Child = () => {
  const { number } = useContext(ExampleContext);
  console.log("number", number);

  return (
    <div>
      <h1>Child</h1>
    </div>
  );
};
export default DemoUseContext;

import React from "react";

const Greet = (props) => {
  const { name, hero, children } = props;

  return (
    <div>
      <h1> Functional Component </h1>
      <h2>
        This is {name} a.k.a the {hero}
      </h2>
      {children}
    </div>
  );
};

export default Greet;

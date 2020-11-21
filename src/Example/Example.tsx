import React, { ReactElement } from "react";
import { ExampleProps } from "./Example.interface";

function Example({ param }: ExampleProps): ReactElement {
  return <h1>Hello {param}</h1>;
}

export default Example;

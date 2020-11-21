import React from "react";
import { render } from "@testing-library/react";
import Example from "./Example";

describe("Example", () => {
  it("should return the correct salutation", () => {
    const { container } = render(<Example param="World" />);
    expect(container.firstChild.textContent).toEqual("Hello World");
  });
});

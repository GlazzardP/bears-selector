import React from "react";
import { render } from "@testing-library/react";
import InputField from "./InputField";

describe("InputField tests", () => {
  it("should render", () => {
    expect(render(<InputField />)).toBeTruthy();
  });
});

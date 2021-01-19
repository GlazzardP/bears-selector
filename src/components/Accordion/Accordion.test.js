import React from "react";
import { render } from "@testing-library/react";
import Accordion from "./Accordion";

describe("Accordion tests", () => {
  it("should render", () => {
    expect(render(<Accordion />)).toBeTruthy();
  });
});

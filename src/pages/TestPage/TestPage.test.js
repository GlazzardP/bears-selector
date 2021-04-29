import React from "react";
import { render } from "@testing-library/react";
import TestPage from "./TestPage";

describe("TestPage tests", () => {
  it("should render", () => {
    expect(render(<TestPage />)).toBeTruthy();
  });
});

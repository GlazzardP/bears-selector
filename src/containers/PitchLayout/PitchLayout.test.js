import React from "react";
import { render } from "@testing-library/react";
import PitchLayout from "./PitchLayout";

describe("PitchLayout tests", () => {
  it("should render", () => {
    expect(render(<PitchLayout />)).toBeTruthy();
  });
});

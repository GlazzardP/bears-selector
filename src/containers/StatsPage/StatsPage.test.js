import React from "react";
import { render } from "@testing-library/react";
import StatsPage from "./StatsPage";

describe("StatsPage tests", () => {
  it("should render", () => {
    expect(render(<StatsPage />)).toBeTruthy();
  });
});

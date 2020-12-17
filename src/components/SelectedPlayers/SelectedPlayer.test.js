import React from "react";
import { render } from "@testing-library/react";
import SelectedPlayers from "./SelectedPlayers";

describe("SelectedPlayers tests", () => {
  it("should render", () => {
    expect(render(<SelectedPlayers />)).toBeTruthy();
  });
});

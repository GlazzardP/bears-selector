import React from "react";
import { render } from "@testing-library/react";
import SelectedPlayer from "./SelectedPlayer";

describe("SelectedPlayer tests", () => {
  it("should render", () => {
    expect(render(<SelectedPlayer />)).toBeTruthy();
  });
});

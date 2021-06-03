import React from "react";
import { render } from "@testing-library/react";
import ConfModal from "./ConfModal";

describe("ConfModal tests", () => {
  it("should render", () => {
    expect(render(<ConfModal />)).toBeTruthy();
  });
});

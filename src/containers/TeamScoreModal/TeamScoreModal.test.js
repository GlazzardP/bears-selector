import React from "react";
import { render } from "@testing-library/react";
import TeamScoreModal from "./TeamScoreModal";

describe("TeamScoreModal tests", () => {
  it("should render", () => {
    expect(render(<TeamScoreModal />)).toBeTruthy();
  });
});

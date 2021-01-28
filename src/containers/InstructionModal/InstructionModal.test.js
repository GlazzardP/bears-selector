import React from "react";
import { render } from "@testing-library/react";
import InstructionModal from "./InstructionModal.tsx";

describe("InstructionModal tests", () => {
  it("should render", () => {
    expect(render(<InstructionModal />)).toBeTruthy();
  });
});

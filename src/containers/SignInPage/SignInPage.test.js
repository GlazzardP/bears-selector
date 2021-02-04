import React from "react";
import { render } from "@testing-library/react";
import SignInPage from "./SignInPage";

describe("SignInPage tests", () => {
  it("should render", () => {
    expect(render(<SignInPage />)).toBeTruthy();
  });
});

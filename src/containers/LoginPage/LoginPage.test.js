import React from "react";
import { render } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("LoginPage tests", () => {
  it("should render", () => {
    expect(render(<LoginPage />)).toBeTruthy();
  });
});

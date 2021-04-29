import React from "react";
import { render } from "@testing-library/react";
import SelectTeamPage from "./SelectTeamPage";

describe("SelectTeamPage tests", () => {
  it("should render", () => {
    expect(render(<SelectTeamPage />)).toBeTruthy();
  });
});

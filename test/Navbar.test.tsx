import Navbar from "@/components/Navbar";
import { describe, test as it, expect } from "vitest";
import { render } from "@testing-library/react";

describe("Navbar component()", () => {
  it("render the navbar with the correct logo and togglers", () => {
    const nav = render(<Navbar />);
    expect(nav.getByTestId("logo")).toBeInTheDocument();
    expect(nav.getByTestId("logo")).toHaveAttribute(
      "src",
      "/src/assets/images/logo.svg",
    );

    expect(nav.getByTestId("font-toggle")).toBeInTheDocument();
    expect(nav.getByTestId("theme-toggle")).toBeInTheDocument();
  });
});

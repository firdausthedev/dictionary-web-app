import FontToggle from "@/components/FontToggle";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test as it, expect } from "vitest";

describe("FontToggle component()", () => {
  it("renders FontToggle with default values", () => {
    render(<FontToggle />);

    expect(screen.getByTestId("font-toggle")).toBeInTheDocument();

    const button = screen.getByTestId("drop-down-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Sans Serif");

    const dropdown = screen.getByTestId("dropdown");
    expect(dropdown).toHaveClass("hidden");
  });

  it("toggles the dropdown when button is clicked", () => {
    render(<FontToggle />);

    const button = screen.getByTestId("drop-down-button");
    const dropdown = screen.getByTestId("dropdown");

    fireEvent.click(button);
    expect(dropdown).toHaveClass("block");

    const dropdownButtons = screen.getAllByTestId("dropdown-btn");
    expect(dropdownButtons).toHaveLength(3);
    fireEvent.click(dropdownButtons[0]);
    expect(dropdown).toHaveClass("hidden");
  });

  it("changes font style when an option is clicked", () => {
    render(<FontToggle />);

    const [sanSerifBtn, serifBtn, monoBtn] =
      screen.getAllByTestId("dropdown-btn");

    fireEvent.click(sanSerifBtn);
    expect(sanSerifBtn).toHaveTextContent("Sans Serif");
    expect(document.body).toHaveClass("font-inter");

    fireEvent.click(serifBtn);
    expect(serifBtn).toHaveTextContent("Serif");
    expect(document.body).toHaveClass("font-lora");

    fireEvent.click(monoBtn);
    expect(monoBtn).toHaveTextContent("Mono");
    expect(document.body).toHaveClass("font-inconsolata");
  });
});

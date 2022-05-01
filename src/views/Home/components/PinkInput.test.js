import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PinkInput from "./PinkInput";

describe("PinkInput", () => {
  test("handle input change", () => {
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    render(
      <PinkInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value=""
        name="test"
        placeholder="test"
      />
    );

    for (let i = 0; i < 3; i++) {
      fireEvent.change(screen.getByRole("textbox"), {
        target: { value: 'test@test.com' },
      });
    }

    expect(handleChange).toBeCalledTimes(3);
  });
  test("can submit", () => {
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    render(
      <PinkInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value=""
        name="test"
        placeholder="test"
      />
    );

    fireEvent.click(screen.getByRole("button"));

    expect(handleSubmit).toBeCalled();
  });
});

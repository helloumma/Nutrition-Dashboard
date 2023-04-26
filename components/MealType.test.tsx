import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { MealType } from ".";

it("renders correctly", () => {
  const result = render(<MealType />);
  expect(result).toMatchSnapshot();
});

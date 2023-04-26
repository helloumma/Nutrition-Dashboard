import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { BreakfastChart } from "..";

it("renders correctly", () => {
  const result = render(<BreakfastChart data={[]} />);
  expect(result).toMatchSnapshot();
});

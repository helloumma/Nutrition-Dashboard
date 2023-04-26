import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { LunchChart } from "..";

it("renders correctly", () => {
  const result = render(<LunchChart data={[]} />);
  expect(result).toMatchSnapshot();
});

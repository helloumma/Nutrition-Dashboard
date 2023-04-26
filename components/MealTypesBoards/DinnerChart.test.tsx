import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { DinnerChart } from "..";

it("renders correctly", () => {
  const result = render(<DinnerChart data={[]} />);
  expect(result).toMatchSnapshot();
});

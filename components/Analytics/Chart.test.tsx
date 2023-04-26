import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Chart from "./Chart";

it("renders correctly", () => {
  const result = render(<Chart data={[]} />);
  expect(result).toMatchSnapshot();
});

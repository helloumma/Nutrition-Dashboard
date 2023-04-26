import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Overall from "./Chart";

it("renders correctly", () => {
  const result = render(<Overall data={[]} />);
  expect(result).toMatchSnapshot();
});

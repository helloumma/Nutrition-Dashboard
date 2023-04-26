import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Dinner } from "..";

it("renders correctly", () => {
  const result = render(<Dinner searchItems={[]} diet={""} />);
  expect(result).toMatchSnapshot();
});

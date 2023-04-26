import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Breakfast } from "..";

it("renders correctly", () => {
  const result = render(<Breakfast searchItems={[]} diet={""} />);
  expect(result).toMatchSnapshot();
});

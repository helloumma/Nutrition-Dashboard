import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Lunch } from "..";

it("renders correctly", () => {
  const result = render(<Lunch searchItems={[]} diet={""} />);
  expect(result).toMatchSnapshot();
});

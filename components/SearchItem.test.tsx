import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { SearchItem } from ".";

it("renders correctly", () => {
  const result = render(<SearchItem data={[]} />);
  expect(result).toMatchSnapshot();
});

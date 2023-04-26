import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { MockAutoComplete } from ".";

it("renders correctly", () => {
  const result = render(
    <MockAutoComplete
      onChangeAC={() => null}
      dataAC={[]}
      onSubmitAC={() => null}
      valueAC={""}
      isLoading={false}
    />
  );
  expect(result).toMatchSnapshot();
});

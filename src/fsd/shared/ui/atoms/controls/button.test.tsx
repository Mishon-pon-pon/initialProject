import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import { Button } from "./button";

let container: HTMLDivElement | null = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

it("render button", () => {
  let test = 0;
  act(() => {
    render(
      <Button
        onClick={() => {
          test = 1;
        }}
      >
        Hello
      </Button>,
      container
    );
  });
  const button = document.querySelector("[data-testid=button]");
  expect(test).toBe(0);
  button?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  expect(test).toBe(1);
});

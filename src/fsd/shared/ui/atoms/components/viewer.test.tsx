import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Viewer } from "./viewer";

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

it("render viewer", () => {
  act(() => {
    render(<Viewer>Hello</Viewer>, container);
  });
  expect(document.querySelector("[data-testid=viewer]")?.textContent).toBe(
    "Hello"
  );
});

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddStock from "../components/AddStock";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import { expect } from "vitest";

test("renders add stock form", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AddStock />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByText(/Add Stock/i)).toBeInTheDocument();
});
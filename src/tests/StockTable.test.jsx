import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import StockTable from "../components/StockTable";
import { BrowserRouter as Router } from "react-router-dom";
import { test, expect } from "vitest";


test("renders stock table with data", () => {
  render(
    <Provider store={store}>
      <Router>
        <StockTable />
      </Router>
    </Provider>
  );

  expect(screen.getByText("AAPL")).toBeInTheDocument(); // exact string, no regex
});
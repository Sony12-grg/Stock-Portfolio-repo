import stockReducer, { addStock } from "../redux/stockSlice";
import { test } from "vitest";
import { expect } from "vitest";

test("should add stock", () => {
  const initialState = { stocks: [] };

  const newStock = {
    id: 1,
    ticker: "TEST",
    name: "Test Inc",
    qty: 10,
    buy: 100,
    current: 120,
    date: "2026-01-01"
  };

  const state = stockReducer(initialState, addStock(newStock));

  expect(state.stocks.length).toBe(1);
  expect(state.stocks[0].ticker).toBe("TEST");
});
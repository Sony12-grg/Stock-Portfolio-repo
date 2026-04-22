import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stocks: [
    { id: 1, ticker: "AAPL", name: "Apple", qty: 10, buy: 100, current: 120 },
    { id: 2, ticker: "TSLA", name: "Tesla", qty: 5, buy: 200, current: 250 }
  ]
};

const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    addStock: (state, action) => {
      state.stocks.push(action.payload);
    },
    deleteStock: (state, action) => {
      state.stocks = state.stocks.filter(
        stock => stock.id !== action.payload
      );
    },
    updateStock: (state, action) => {
      const index = state.stocks.findIndex(
        stock => stock.id === action.payload.id
      );
      if (index !== -1) {
        state.stocks[index] = action.payload;
      }
    }
  }
});

export const { addStock, deleteStock, updateStock } = stockSlice.actions;
export default stockSlice.reducer;
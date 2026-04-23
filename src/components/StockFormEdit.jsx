import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateStock } from "../redux/stockSlice";
import { useState, useEffect } from "react";

export default function StockFormEdit() {
  const { id } = useParams();
  const stockId = Number(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stock = useSelector((state) =>
    state.stocks.stocks.find((s) => s.id === stockId)
  );

  const [form, setForm] = useState({
    ticker: "",
    name: "",
    qty: 0,
    buy: 0,
    current: 0,
    date: ""
  });

  useEffect(() => {
    if (stock) setForm(stock);
  }, [stock]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStock = {
      ...form,
      id: stockId,
      qty: Number(form.qty),
      buy: Number(form.buy),
      current: Number(form.current),
      date: form.date
    };

    dispatch(updateStock(updatedStock));

    navigate("/");
  };

  return (
     <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Edit Stock
        </h2>

        {/* Ticker */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Ticker</label>
          <input
            name="ticker"
            value={form.ticker}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Company Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Quantity */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Quantity</label>
          <input
            type="number"
            name="qty"
            value={form.qty}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Buy Price */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Buy Price</label>
          <input
            type="number"
            name="buy"
            value={form.buy}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Current Price */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Current Price</label>
          <input
            type="number"
            name="current"
            value={form.current}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Purchase Date */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Purchase Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-1/2 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-md"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
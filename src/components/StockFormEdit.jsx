import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateStock } from "../redux/stockSlice";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function StockFormEdit() {
  const { id } = useParams();
  const stockId = Number(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stock = useSelector((state) =>
    state.stocks.stocks.find((s) => s.id === stockId)
  );

  const initialValues = {
    ticker: "",
    name: "",
    qty: 0,
    buy: 0,
    current: 0,
    date: ""
  };

  const validationSchema = Yup.object({
    ticker: Yup.string().required("Ticker is required"),
    name: Yup.string().required("Company name is required"),
    qty: Yup.number().typeError("Quantity must be a number").integer("Quantity must be an integer").min(1, "Quantity must be at least 1").required("Quantity is required"),
    buy: Yup.number().typeError("Buy price must be a number").min(0, "Buy price cannot be negative").required("Buy price is required"),
    current: Yup.number().typeError("Current price must be a number").min(0, "Current price cannot be negative").required("Current price is required"),
    date: Yup.date().typeError("Invalid date").required("Purchase date is required")
  });

  const handleFormikSubmit = (values) => {
    const updatedStock = {
      ...values,
      id: stockId,
      qty: Number(values.qty),
      buy: Number(values.buy),
      current: Number(values.current),
      date: values.date
    };

    dispatch(updateStock(updatedStock));

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Formik
        initialValues={stock ? {
          ticker: stock.ticker ?? "",
          name: stock.name ?? "",
          qty: stock.qty ?? 0,
          buy: stock.buy ?? 0,
          current: stock.current ?? 0,
          date: stock.date ?? ""
        } : initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleFormikSubmit}
      >
        <Form className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-700">Edit Stock</h2>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Ticker</label>
            <Field name="ticker" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <ErrorMessage name="ticker" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Company Name</label>
            <Field name="name" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Quantity</label>
            <Field type="number" name="qty" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <ErrorMessage name="qty" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Buy Price</label>
            <Field type="number" name="buy" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <ErrorMessage name="buy" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Current Price</label>
            <Field type="number" name="current" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <ErrorMessage name="current" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Purchase Date</label>
            <Field type="date" name="date" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex justify-between gap-3 pt-2">
            <button type="button" onClick={() => navigate("/")} className="w-1/2 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-md">Cancel</button>
            <button type="submit" className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">Update</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
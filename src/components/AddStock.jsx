import { Formik } from "formik"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStock } from "../redux/stockSlice.js";
 import * as Yup from 'yup';

const stockSchema = Yup.object({
  ticker: Yup.string().required("Ticker is required"),
  name: Yup.string().required("Name is required"),
  qty: Yup.number().required("Quantity is required").positive("Quantity must be a positive number"),
  buy: Yup.number().required("Buy price is required").positive("Buy price must be a positive number"),
  current: Yup.number().required("Current price is required").positive("Current price must be a positive number")
});

export default function AddStock() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues ={{
          ticker: "",
          name: "",
          qty: 0,
          buy: 0,
          current: 0
        }}
        validationSchema={stockSchema}
        onSubmit = {(values) => {
           dispatch(addStock(values));
            navigate("/");
        }}
      >
        {({values, handleChange, handleSubmit,errors, touched}) => (

          <form onSubmit={handleSubmit}  className="bg-amber-100 p-6 rounded-lg shadow-md w-full max-w-md mx-auto space-y-4">
            {/* For Ticker */}
            <h2 className="text-center font-bold text-2xl">Add Stock</h2>
             <div className="flex flex-col ">
               <label htmlFor="ticker">Ticker</label>
               <input
                id="ticker"
                name="ticker"
                placeholder="Ticker"
                onChange={handleChange}
                value={values.ticker}
                className="border rounded-md p-2 focus:outline-none border-gray-500"
               />
               {errors.ticker && touched.ticker && <div className="text-red-500">{errors.ticker}</div>}
             </div>

             <div className="flex flex-col">
               <label htmlFor="name">Name</label>
               <input
                 id="name"
                 name="name"
                 type="text"
                 placeholder="Name"
                 onChange={handleChange}
                 value={values.name}
                  className="border rounded-md p-2 focus:outline-none border-gray-500"
               />
               {errors.name && touched.name && <div className="text-red-500">{errors.name}</div>}
          
             </div>
             <div className="flex flex-col">
              <label htmlFor="qty">Quantity</label>
              <input
               id="qty"
               name="qty"
               type="number"
               placeholder="Qty"
               onChange={handleChange}
               value={values.qty}
               className="border rounded-md p-2 focus:outline-none border-gray-500"
               />
               {errors.qty && touched.qty && <div className="text-red-500">{errors.qty}</div>}
             </div>
             <div className="flex flex-col">
              <label htmlFor="buy">Buy Price</label>
              <input
                id="buy"
                name="buy"
                type="number"
                placeholder="Buy Price"
                onChange={handleChange}
                value={values.buy}
                className="border rounded-md p-2 focus:outline-none border-gray-500"
              />
              {errors.buy && touched.buy && <div className="text-red-500">{errors.buy}</div>}
             </div>
             <div className="flex flex-col">
               <label htmlFor="current">Current Price</label>
               <input
                id="current"
                name="current"
                type="number"
                placeholder="Current Price"
                onChange={handleChange}

                value={values.current}
                className="border rounded-md p-2 focus:outline-none border-gray-500"
               />
               {errors.current && touched.current && <div className="text-red-500">{errors.current}</div>}
             </div>
             <button type="submit"    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition">
              Add
             </button>
          </form>
          
        )}
      </Formik>
    </div>
  )
}

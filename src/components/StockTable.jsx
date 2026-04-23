import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStock } from "../redux/stockSlice";
import { Link } from "react-router-dom";

import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from "@tanstack/react-table";

export default function StockTable() {
  const stocks = useSelector(state => state.stocks.stocks);
  const dispatch = useDispatch();

  // Define columns
  const columns = useMemo(() => [
    {
      header: "Ticker",
      accessorKey: "ticker",
    },
    {
      header: "Company",
      accessorKey: "name",
    },
    {
      header: "Quantity",
      accessorKey: "qty",
    },
    {
      header: "Buy Price",
      accessorKey: "buy",
      cell: info => `${info.getValue().toFixed(2)}`
    },
    {
      header: "Current Price",
      accessorKey: "current",
      cell: info => `${info.getValue().toFixed(2)}`
    },
    {
     header: "Purchase Date",
     accessorKey: "date",
    },
    {
      header: "Actions",
      cell: ({ row }) => {
        const stock = row.original;
        return (
          <div className="flex justify-center gap-2">
            <Link to={`/edit-stock/${stock.id}`}>
              <button className="bg-blue-500 text-white px-3 py-1 rounded">
                Edit
              </button>
            </Link>

            <button
              onClick={() => dispatch(deleteStock(stock.id))}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        );
      }
    }
  ], [dispatch]);

  // Create table instance
  const table = useReactTable({
    data: stocks,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      <Link to="/add-stock">
        <button className="bg-green-500 text-white px-4 py-2 rounded mb-3">
          + Add Stock
        </button>
      </Link>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          
          {/* HEADER */}
          <thead className="bg-gray-200">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="p-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* BODY */}
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="text-center border-t">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="p-2">
                    {cell.column.columnDef.cell
                      ? flexRender(cell.column.columnDef.cell, cell.getContext())
                      : String(cell.getValue())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
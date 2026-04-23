Stock Portfolio App
A React-based frontend application for visualising and managing a personal stock portfolio. Built with Redux Toolkit, TanStack Table, Formik, Chart.js, and Tailwind CSS.

🚀 Features

Portfolio Table — built with TanStack Table (sorting, filtering)
Add / Edit / Delete Stocks — with Formik + Yup validation on both forms
Charts — Line chart (price trend) and Bar chart (gain/loss per stock)
Summary Stats — total portfolio value, total gain/loss at a glance
Colour-coded rows — green for profit, red for loss
LocalStorage persistence — portfolio survives page refresh
Responsive — works on all screen sizes

🛠 Tech Stack
ConcernLibraryUI FrameworkReact 19 (functional components + hooks)State ManagementRedux ToolkitTableTanStack Table v8Forms & ValidationFormik + YupChartsChart.js + react-chartjs-2StylingTailwind CSS v4RoutingReact Router DOM v7Persistenceredux-persist + localStorageTestingVitest + @testing-library/react

📦 Installation & Setup
Prerequisites

Node.js v18 or higher
npm v9 or higher

Steps
bash# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/stock-portfolio.git
cd stock-portfolio

# 2. Install dependencies

npm install

# 3. Start the development server

npm run dev
The app will be running at http://localhost:5173

🧪 Running Tests
bashnpm run test
To run tests with UI:
bashnpm run test:ui

📁 Folder Structure
src/
├── components/
│ ├── AddStock.jsx # Add stock modal/form (Formik + Yup)
│ ├── StockFormEdit.jsx # Edit stock form (Formik + Yup)
│ ├── StockTable.jsx # Portfolio table (TanStack Table)
│ ├── BarChart.jsx # Gain/Loss bar chart
│ ├── LineChart.jsx # Price trend line chart
│ └── SummaryStats.jsx # Portfolio summary cards
├── data/
│ └── mockData.js # Static trend data for line chart
├── pages/
│ └── Portfolio.jsx # Main portfolio page
├── redux/
│ ├── store.js # Redux store with redux-persist
│ └── stockSlice.js # Stock slice (add/edit/delete)
├── tests/
│ ├── stockSlice.test.js # Redux slice unit tests
│ └── StockTable.test.jsx # Component tests
├── App.jsx
├── main.jsx
└── index.css

📝 Commit History (task-wise)
feat: initialise Vite + React project
feat: add Redux store and stock slice
feat: add portfolio table with TanStack Table
Date of purchase update

feat: add AddStock form with Formik + Yup validation
feat: add EditStock form with Formik + Yup validation
feat: add delete stock functionality
feat: add Bar chart and Line chart with Chart.js
feat: add SummaryStats component
feat: add localStorage persistence with redux-persist
feat: add filter and sort to portfolio table
feat: add unit tests for stock slice and table component
style: improve UI with Tailwind CSSSt

Stock Portfolio App
A React-based frontend application for visualising and managing a personal stock portfolio. Built with Redux Toolkit, TanStack Table, Formik, Chart.js, and Tailwind CSS.

🚀 Features

Portfolio Table — built with TanStack Table
Add / Edit / Delete Stocks — with Formik + Yup validation on both forms
Charts — Line chart (price trend) and Bar chart (gain/loss per stock)
Colour-coded rows — green for profit, red for loss
Responsive — works on all screen sizes

🛠 Tech Stack
ConcernLibraryUI FrameworkReact 19 (functional components + hooks)State ManagementRedux ToolkitTableTanStack Table v8Forms & ValidationFormik + YupChartsChart.js + react-chartjs-2StylingTailwind CSS v4RoutingReact Router DOM  @testing-library/react

📦 Installation & Setup
Prerequisites

Node.js v18 or higher
npm v9 or higher

Steps
bash# 1. Clone the repository
git clone (https://github.com/Sony12-grg/Stock-Portfolio-repo)
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
│ 
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
  └── AddStock.test.jsx 
├── App.jsx
├── main.jsx
└── index.css

📝 Commit History (task-wise)
1: vite setup and added portfolio table UI
2: implemented edit, delete and add functionality,
3: implemented bar and line chart using chart.js
4: Date of purchase update
5: Added Jest-Test
6: Final addition to make good look of UI,

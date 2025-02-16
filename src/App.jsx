/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropTypes from 'prop-types';
import { Home, Auth, Orders, Menu, Rooms, More } from "./pages";
import Header from "./components/shared/Header";
import Tables from "./pages/Tables";
import { ThemeProvider } from "./contexts/theme-context";

// Dashboard
import Layout from "./routes/layout";
import DashboardPage from "./routes/dashboard/page";


function MLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

MLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MLayout>
      <Layout />
    </MLayout>,
  },
  {
    path: "/",
    element: <MLayout>
      <DashboardPage />
    </MLayout>,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/orders",
    element: <MLayout>
      <Orders />
    </MLayout>,
  },
  {
    path: "/tables",
    element: <MLayout>
      <Tables />
    </MLayout>,
  },
  {
    path: "/menu",
    element: <MLayout>
      <Menu />
    </MLayout>,
  },
  {
    path: "/rooms",
    element: <MLayout>
      <Rooms />
    </MLayout>,
  },
  {
    path: "/more",
    element: <MLayout>
      <More />
    </MLayout>,
  },
  {
    path: "/analytics/reports",
    element: <MLayout>
      <h1 className="title">
        Reports
      </h1>
    </MLayout>,
  },
  {
    path: "/analytics/customers",
    element: <MLayout>
      <h1 className="title">
        Customers
      </h1>
    </MLayout>,
  },
  {
    path: "/analytics/new-customer",
    element: <MLayout>
      <h1 className="title">
        New Customer
      </h1>
    </MLayout>,
  },
  {
    path: "/analytics/verified-customer",
    element: <MLayout>
      <h1 className="title">
        Verified Customer
      </h1>
    </MLayout>,
  },
  {
    path: "/analytics/products",
    element: <MLayout>
      <h1 className="title">
        Products
      </h1>
    </MLayout>,
  },
  {
    path: "/analytics/new-product",
    element: <MLayout>
      <h1 className="title">
        New Product
      </h1>
    </MLayout>,
  },
  {
    path: "/analytics/inventory",
    element: <MLayout>
      <h1 className="title">
        Inventory
      </h1>
    </MLayout>,
  },
  {
    path: "/analytics/settings",
    element: <MLayout>
      <h1 className="title">
        Settings
      </h1>
    </MLayout>,
  },
  {
    path: "*",
    element: <MLayout>
      <h1>Not Found</h1>
    </MLayout>,
  },
]);

function App() {
  return (
    <ThemeProvider storageKey="theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

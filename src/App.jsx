/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropTypes from 'prop-types';
import { Home, Auth, Orders, Menu, Rooms, More } from "./pages";
import Header from "./components/shared/Header";
import Tables from "./pages/Tables";
import { ThemeProvider } from "./contexts/theme-context";


function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>
      <Home />
    </Layout>,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/orders",
    element: <Layout>
      <Orders />
    </Layout>,
  },
  {
    path: "/tables",
    element: <Layout>
      <Tables />
    </Layout>,
  },
  {
    path: "/menu",
    element: <Layout>
      <Menu />
    </Layout>,
  },
  {
    path: "/rooms",
    element: <Layout>
      <Rooms />
    </Layout>,
  },
  {
    path: "/more",
    element: <Layout>
      <More />
    </Layout>,
  },
  {
    path: "/analytics/reports",
    element: <Layout>
      <h1 className="title">
        Reports
      </h1>
    </Layout>,
  },
  {
    path: "/analytics/customers",
    element: <Layout>
      <h1 className="title">
        Customers
      </h1>
    </Layout>,
  },
  {
    path: "/analytics/new-customer",
    element: <Layout>
      <h1 className="title">
        New Customer
      </h1>
    </Layout>,
  },
  {
    path: "/analytics/verified-customer",
    element: <Layout>
      <h1 className="title">
        Verified Customer
      </h1>
    </Layout>,
  },
  {
    path: "/analytics/products",
    element: <Layout>
      <h1 className="title">
        Products
      </h1>
    </Layout>,
  },
  {
    path: "/analytics/new-product",
    element: <Layout>
      <h1 className="title">
        New Product
      </h1>
    </Layout>,
  },
  {
    path: "/analytics/inventory",
    element: <Layout>
      <h1 className="title">
        Inventory
      </h1>
    </Layout>,
  },
  {
    path: "/analytics/settings",
    element: <Layout>
      <h1 className="title">
        Settings
      </h1>
    </Layout>,
  },
  {
    path: "*",
    element: <Layout>
      <h1>Not Found</h1>
    </Layout>,
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

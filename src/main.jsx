import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

import './index.css'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import AddDishPage from './pages/admin/AddDishPage.jsx'
import ManageDishPage from './pages/admin/ManageDishPage.jsx'
import Login from './pages/Login.jsx'
import SellerListPage from './pages/seller/SellerListPage.jsx'
import ProductDetailsPage from './pages/product/ProductDetailsPage.jsx'
import OrderSummaryPage from './pages/order/OrderSummaryPage.jsx'
import SellerHighlights from './components/SellerHighlights.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import UserListPage from './pages/user/UserListPage.jsx'
import LayOutPage from './pages/LayoutPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOutPage />,
    errorElement: <ErrorPage />,

    children: [{
      index: true,
      element: <Home />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/seller/",
      element: <SellerHighlights />
    },
    {
      path: "/seller/:dish",
      element: <SellerListPage />
    },
     {
      path: "/about/",
      element: <AboutUs />
    },
     {
      path: "/contact/",
      element: <ContactUs />
    },
    {
      path: "/terms/",
      element: <TermsAndConditions />
    },  
    {
      path: "/product/:seller",
      element: <ProductDetailsPage />
    },
    {
      path: "/orders",
      element: <OrderSummaryPage />
    },
    {
      path: "/admin/dishes",
      element: <ManageDishPage />
    },
    {
      path: "/admin/adddish",
      element: <AddDishPage />
    },
    {
      path: "/admin/adddish/:dishId",
      element: <AddDishPage />
    },{
      path: "/users",
      element: <UserListPage />
    }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)

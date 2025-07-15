import { Suspense, lazy } from 'react'
import ModalProvider from './context/ModalProvider'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loader from './components/Loader'
import './App.css';
import { Provider } from 'react-redux';
import { persistor, store } from './api/data/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import{ToastContainer} from "react-toastify"

const Landing = lazy(() => import("./pages/Landing"))
const LandingContent = lazy(() => import("./pages/LandingContent"))
const CompareProduct = lazy(() => import("./pages/CompareProduct"))
const WishList = lazy(() => import("./pages/WhishList"))
const ProductDetail = lazy(() => import("./pages/ProductDetail"))
const ProductCollection = lazy(() => import("./pages/ProductCollection"))
const Register = lazy(() => import("./pages/Register"))
const Login = lazy(() => import("./pages/Login"))
const App = () => {
  // 88, 148, 3)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      children: [
        {
          index: true,
          element: <LandingContent />
        },
        {
          path: "compare-product",
          element: <CompareProduct />
        }, {
          path: "wish-list",
          element: <WishList />
        },
        {
          path: "product-detail/:id",
          element: <ProductDetail />
        },
        {
          path: "category/:id",
          element: <ProductCollection />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        },

      ]
    }
  ]);


  // i want to delay the rendering of our app’s UI until the persisted data is available in the Redux store


  return (
    <ModalProvider>

      <Suspense fallback={<Loader />} >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>

            <RouterProvider router={router} />
            <ToastContainer/>
          </PersistGate>

        </Provider>

      </Suspense>

    </ModalProvider>
  )
}

export default App
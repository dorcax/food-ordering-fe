import { Suspense, lazy } from 'react'
import ModalProvider from './context/ModalProvider'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loader from './components/Loader'
import './App.css';

const Landing = lazy(() => import("./pages/Landing"))
const LandingContent = lazy(() => import("./pages/LandingContent"))
const CompareProduct = lazy(() => import("./pages/CompareProduct"))
const WishList =lazy(()=>import("./pages/WhishList"))
const ProductDetail =lazy(()=>import ("./pages/ProductDetail"))
const ProductCollection= lazy(()=>import("./pages/ProductCollection"))
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
        },{
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
        
      ]
    }
  ]);

  


 
  return (
    <ModalProvider>
      <Suspense fallback={<Loader />} >
        <RouterProvider router={router} />
      </Suspense>

    </ModalProvider>
  )
}

export default App
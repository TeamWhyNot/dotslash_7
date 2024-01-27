import React from 'react'
import { Button } from './components/Button'
import Landing from './screens/Landing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes/route'
import AuthState from './context/AuthState'
import ShopState from './context/shop/ShopState'
const App = () => {

  const routings = createBrowserRouter(routes);

  return (
    <div>
      <AuthState>
        <ShopState>
          <RouterProvider router={routings}></RouterProvider>
        </ShopState>

      </AuthState>

    </div>






  )
}

export default App
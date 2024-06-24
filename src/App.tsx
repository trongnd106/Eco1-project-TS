import { BrowserRouter, Route, Routes } from "react-router-dom";

import View from "./layouts/View";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Admin from "./layouts/Admin";
import AdminProductList from "./pages/AdminProductList";
import Spinner from "./components/Spinner";
import { createContext, useReducer } from "react";
import spinnerAction from "./action/spinner";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import Register from "./pages/Register";
import Login from "./pages/SignIn";
import localStorageSevicer from "./services/localService";
import PrivateRouter from "./pages/PrivateRouter";
export const spinnerCT = createContext([(e: any) => {}]);
const App = () => {
  const [state, dispatch] = useReducer(spinnerAction, false);
  let isAdmin = false;
  const data = localStorageSevicer.get()?.data;
  if (data && data.role == "admin") {
    isAdmin = true;
  }
  return (
    <spinnerCT.Provider value={[dispatch]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />}>
            <Route index element={<HomePage />} />
            <Route path="products/:id" element={<DetailPage />} />
            <Route path="products" element={<ProductsPage />} />
          </Route>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route
            path="/admin"
            element={<PrivateRouter user={isAdmin} children={<Admin />} />}
          >
            <Route index element={<AdminProductList />} />
            <Route path="create-product" element={<AddProduct />} />
            <Route path="update-product/:id" element={<UpdateProduct />} />
          </Route>
        </Routes>
        {state && <Spinner />}
      </BrowserRouter>
    </spinnerCT.Provider>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList, ProductDetail, Login, Register, CartPage, OrderPage, PageNotFound } from "../pages";
import { SecuredRoutes } from "./SecuredRoutes";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage title="Home" />} />
        <Route path="/products" element={<ProductsList title="All eBooks" />} />
        <Route path="/products/:id" element={<ProductDetail title="Details" />} />

        {/* JSON-Auth */}
        <Route path="/Register" element={<Register title="Register" />} />
        <Route path="/Login" element={<Login title="Login"/>} />
        
        <Route path="*" element={<PageNotFound title="404" />} />
        
        {/* Protected Routes */}
        <Route path="/Cart" element={<SecuredRoutes><CartPage title="Cart" /></SecuredRoutes>} />
        <Route path="/DashboardPage" element={<SecuredRoutes><DashboardPage title="Dashboard" /></SecuredRoutes>} />
        <Route path="/OrderPage" element={<SecuredRoutes><OrderPage title="OrderPage" /></SecuredRoutes>} />
    </Routes>
    </>
  )
}

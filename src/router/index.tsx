import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../pages/Home";
import ProductDetailsPage from "../pages/ProductDetails";
import ShopPage from "../pages/Shop";
import RootLayout from "../pages/Layout";
import ContactPage from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="product-details" element={<ProductDetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;

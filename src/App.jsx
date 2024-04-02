import { Route, Routes } from "react-router-dom";
import "./App.sass";
import HomePage from "./pages/home/home";
import Layout from "./components/Layout/Layout";
import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

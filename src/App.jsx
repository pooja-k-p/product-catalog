import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./components/productlist";
import ProductForm from "./components/ProductForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/products" />} />

                <Route path="/products" element={<ProductList />} />

                <Route path="/add-product" element={<ProductForm />} />

                <Route path="/edit-product/:id" element={<ProductForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App


import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Login from "./pages/Login"
import User from "./pages/User"
import CartRevision from "./pages/CartRevision"
import ProductRevision from "./pages/ProductRevision"
import ProductDetail from "./pages/ProductDetail"

function App() {

    const [cartItems, setCartItems] = useState([])

    function addToCart(product) {

        let existing = cartItems.find(
            item => item.id === product.id
        )

        if (existing) {
            setCartItems(cartItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ))
        }
        else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }

    function decreaseQuantity(product) {

        setCartItems(cartItems.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter(item => item.quantity > 0))

    }

    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<HomePage />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/contact" element={<Contact />} />

                    <Route path="/services" element={<Services />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/user/:username" element={<User />} />

                    <Route path="/cart" element={
                        <CartRevision
                            cartItems={cartItems}
                            addToCart={addToCart}
                            decreaseQuantity={decreaseQuantity}
                        />
                    } />

                    <Route path="/products" element={
                        <ProductRevision
                            cartItems={cartItems}
                            addToCart={addToCart}
                            decreaseQuantity={decreaseQuantity}
                        />
                    } />

                    <Route path="/detail/:id" element={<ProductDetail />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

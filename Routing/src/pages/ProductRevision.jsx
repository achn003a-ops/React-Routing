import React, { useState } from 'react'
import {Link} from "react-router-dom"
import  CartRevision from '../pages/CartRevision'

const ProductRevision = ({addToCart, cartItems, decreaseQuantity}) => {

    

    let products = [
        {id: 1, name: "Smart Watch", price: 1500, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"},
        {id: 2, name: "Shoes", price: 2000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"},
        {id: 3, name: "Headphones", price: 999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"},
        {id: 4, name: "Laptop", price: 45000, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"},
        {id: 5, name: "Camera", price: 25000, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"},
        {id: 6, name: "Handbag", price: 1200, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400"},
        {id: 7, name: "Sunglasses", price: 700, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"},
        {id: 8, name: "Phone", price: 15000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"},
        {id: 9, name: "Keyboard", price: 800, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"},
        {id: 10, name: "Mouse", price: 500, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"},
        {id: 11, name: "Speaker", price: 1500, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400"},
        {id: 12, name: "Bottle", price: 300, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400"},
        {id: 13, name: "T-Shirt", price: 600, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"},
        {id: 14, name: "Watch", price: 1800, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400"},
        {id: 15, name: "Chair", price: 5000, image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400"}
    ]
  return (
    
    <>
   <nav style={{
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  alignItems: "center",
  margin: "5vh"
}}>
  <Link to="/">Products</Link>
  <Link to="/Cart">Cart ({cartItems.length})</Link>
</nav>
      <h1 style={{textAlign:"center"}}>Our Products</h1>

            <div style={{
                display:"flex",
                flexWrap:"wrap",
                justifyContent:"center",
                gap:"40px",
                padding:"20px"
            }}>
        {
            products.map((product)=>{
                return(
                   <div key={product.id} style={{
                        width:"220px",
                        padding:"15px",
                        background:"white",
                        textAlign:"center",
                        borderRadius:"10px",
                        boxShadow:"0px 2px 10px gray"
                    }}>
                        <h2 style={{
                            color:"black"
                        }}> {product.name}</h2>
                        <img src={product.image} style={{
                                width:"100%",
                                height:"160px",
                                objectFit:"contain"
                            }} />
                        <h3 style={{
                            color:"black"
                        }}>Price: {product.price}</h3>
                        
                        {
                            cartItems.find(item=> item.id == product.id)  ? (
                                <div>
                                <button style={{
                            background:"black",
                            color:"white",
                            padding:"10px 20px",
                            border:"none",
                            cursor:"pointer"
                        }} onClick={()=>decreaseQuantity(product)}>-</button>
                                <button style={{
                            background:"black",
                            color:"white",
                            padding:"10px 20px",
                            border:"none",
                            cursor:"pointer"
                        }}>{
                                        cartItems.find(cartItem => cartItem.id == product.id).quantity
                                    }</button>
                                <button style={{
                            background:"black",
                            color:"white",
                            padding:"10px 20px",
                            border:"none",
                            cursor:"pointer"
                        }} onClick={()=>addToCart(product)}>+</button>
                            </div>
                            )
                            
                            : <>
                            <button style={{
                            background:"black",
                            color:"white",
                            padding:"10px 20px",
                            border:"none",
                            borderRadius:"5px",
                            cursor:"pointer"
                        }} onClick={()=>addToCart(product) }><Link to="/Cart" style={{fontFamily:"bold" , color:"white",textDecoration: "none"}}>Add to cart </Link>
                       </button>
                       <Link to={`/detail/${product.id}`} style={{
                          background:"black",
                                      color:"white",
                               padding:"5px",
                          border:"none",
                           borderRadius:"5px",
                           cursor:"pointer",
                              textDecoration:"none"
                                        }}>
                                 View details
                                    </Link>
                      </>
                       
                        }
                        
                    </div>
                )
            })
        }
        </div>
    </>
  )
}

export default ProductRevision
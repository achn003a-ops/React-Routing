import React from 'react'

import { Link } from 'react-router-dom'
import "../styles/First.css"

const CartRevision = ({
    addToCart,
    cartItems = [],
    decreaseQuantity
}) => {
  return (
    <>
    { 
        cartItems.length >0 ?
              
       
       
        <div style={{
            maxWidth:"900px",
            margin:"40px auto",
            padding:"20px",
            fontFamily:"Arial"
        }}>

        <h1 style={{
            fontSize:"28px",
            marginBottom:"5px"
        }}>Cart section
        <Link to="/" style={{textDecoration: "none"}}>
  
</Link></h1>

        <p style={{
            color:"gray",
            marginTop:"5px"
        }}>{cartItems.length} items in your cart</p>

        <div style={{
            display:"flex",
            flexDirection:"column",
            gap:"15px",
            marginTop:"25px"
        }}>

        {
            cartItems.map((item)=>{
                return(
                    <>
                    <div key={item.id} style={{
                        display:"flex",
                        alignItems:"center",
                        width:"100%",
                        minHeight:"130px",
                        background:"white",
                        borderRadius:"12px",
                        boxShadow:"0px 2px 8px rgba(0,0,0,0.12)",
                        border:"1px solid #eee",
                        overflow:"hidden"
                    }}>

                    <img style={{
                        width:"120px",
                        height:"110px",
                        objectFit:"contain",
                        background:"#f1f1f1",
                        margin:"10px",
                        borderRadius:"8px"
                    }} src={item.image} />

                    <div style={{
                        flex:"1",
                        padding:"15px"
                    }}>

                        <h3 style={{
                            color:"black",
                            fontSize:"16px",
                            margin:"0 0 5px 0"
                        }}>
                            {item.name}
                        </h3>

                        <p style={{
                            color:"gray",
                            fontSize:"13px",
                            margin:"0 0 15px 0"
                        }}>
                            Standard
                        </p>

                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"12px"
                        }}>

                            <button style={{
                                background:"white",
                                 color:"black",
                                border:"1px solid #ddd",
                                borderRadius:"7px",
                                padding:"6px 12px",
                                cursor:"pointer",
                                fontSize:"18px"
                            }} onClick={()=>decreaseQuantity(item)}>
                                -
                            </button>

                            <span style={{
                                color:"black"
                            }}>
                                {
                                    cartItems.find(cartItem => cartItem.id == item.id).quantity
                                }
                            </span>

                            <button style={{
                                background:"white",
                                color:"black",
                                border:"1px solid #ddd",
                                borderRadius:"7px",
                                padding:"6px 12px",
                                cursor:"pointer",
                                fontSize:"18px"
                            }} onClick={()=>addToCart(item)}>
                                +
                            </button>

                        </div>

                    </div>

                    <div style={{
                        padding:"20px",
                        textAlign:"right",
                        minWidth:"100px"
                    }}>
                        <h3 style={{
                            fontSize:"16px",
                            margin:0,
                            color:"black"
                        }}>
                            ₹{item.price*item.quantity}
                        </h3>
                    </div>

                        

                    </div>
                    </>
                )
            })
        }

        </div>
        </div> :
 <div
    className="shopping-link"
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        width: "300px",
        border: "2px solid black",
        margin: "10% 0 0 40%",
        borderRadius:"10px"
    }}
>
    <Link
        to="/"
        style={{
            textAlign: "center",
            textDecoration: "none",
            fontSize: "20px",
            height: "100%",
            width: "100%",
            color:"black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            backgroundColor: "transparent"
        }}
    >
        Continue Shopping 🛒
    </Link>
</div>
}
    </>
  )
}

export default CartRevision
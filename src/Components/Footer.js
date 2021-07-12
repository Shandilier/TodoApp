import React from 'react'

export default function Footer() {

    let footerStyle ={
        position:"relative",
        width: "100%", 
        top:"100vh",
    }
    return (
        <div className = "bg-dark text-light py-5" style={{footerStyle}}>
            <p className = "text-center">
                Footer!!
            </p>
        </div>
    )
}

import React from "react";

function getRandomInt(count: Number) {
    return Math.floor(Math.random()*count);
}

export default function ProductDetailsLayout({children,}:{children:React.ReactNode})
{
    const random = getRandomInt(2);
    if (random == 1) {
        throw new Error("Error loding review");
    }
    return (
        <>
            {children}
            <h2>Featured Products</h2>
        </>
    )
}
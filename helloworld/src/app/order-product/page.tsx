"use client"
import { useRouter,redirect } from "next/navigation";
export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("order placed");
        redirect("/");
    };
    return <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>

        </>
}
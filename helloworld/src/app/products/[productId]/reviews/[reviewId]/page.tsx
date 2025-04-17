import { error } from 'console';
import { notFound } from 'next/navigation';
// function getRandomInt(count: Number) {
    // return Math.floor(Math.random()*count);
// }
export default async function ProductReview({params}: {params: Promise<{productId: string; reviewId: string}>;})
{
    // const random = getRandomInt(2);
    // if (random == 1) {
    //     throw new Error("Error loding review");
    // }
    const {productId,reviewId} = await params;
    if(parseInt(reviewId)>1000){
        <h1>{reviewId}</h1>
        notFound();
    }
    return <h1>Review {reviewId} for Product {productId}</h1>
}
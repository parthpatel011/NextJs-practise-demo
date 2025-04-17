export const dynamic = "force-dynamic";
import { Suspense } from "react";
import Products from "@/components/products";
import Reviews from "@/components/reviews";

export default function ProductReviews() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>Loading Product Details..</p>}>
        <Products />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews Details..</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}

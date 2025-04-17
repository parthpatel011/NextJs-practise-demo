import { removeProduct } from "@/actions/product";
import { getProducts } from "@/prisma-db";
import { useOptimistic } from "react";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductDBPage() {
  const products: Product[] = await getProducts();
  const [optimisticProducts,setOptimisticProducts] = useOptimistic(products,(currentProducts,productId)=>{
    return currentProducts.filter((product)=>product.id !== productId);
  })

  const removeProductById = async (productId:number) => {
    await removeProduct(productId);
  }
  return (
      <ul>
      {optimisticProducts.map((product) => (
        <li>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <form action={removeProduct.bind(null,product.id)}>
            <button type="submit">
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}

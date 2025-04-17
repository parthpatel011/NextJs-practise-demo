
type props = {
    params: Promise<{productId: string}>;
};

export default async function ProductDetails({params}:props) {
    const productId = (await params).productId
    return <h1>Details about product {productId}</h1>;
}
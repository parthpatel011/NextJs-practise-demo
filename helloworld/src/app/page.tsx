import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1>Welcome Home</h1>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        <Link href="/articals/breaking-news-123?lang=en">Read in english.</Link>
        <Link href="/articals/breaking-news-123?lang=fr">Read in french</Link>
    </div>
  );
}

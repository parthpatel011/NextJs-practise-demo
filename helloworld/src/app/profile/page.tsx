import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}

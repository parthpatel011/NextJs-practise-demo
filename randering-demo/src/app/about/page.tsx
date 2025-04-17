import { cookies } from "next/headers";
export default async function AboutPage(){
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme");
    console.log(theme); 
    // console.log("about server comonent");
    return <h1>About Page</h1>;
}
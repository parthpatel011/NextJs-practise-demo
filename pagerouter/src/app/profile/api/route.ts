import { headers,cookies } from "next/headers";
import { NextRequest } from "next/server";

// export async function GET() {
    // return new Response("Profile Api Data");
// }

export async function GET(request: NextRequest) {
    // const requestHeader = new Headers(request.headers);
    // console.log(requestHeader.get("Authorization"));
    const headerList = await headers();
    console.log(headerList.get("Authorization"));
    const theme = request.cookies.get("theme");
    const cookiestore = await cookies();
    cookiestore.set("resultsPerPage","20");
    console.log(theme);
    console.log(cookiestore.get("resultsPerPage"));
    return new Response("<h1>Profile Api Data<h1>",{
        headers:{
            "Content-type":"text/html",
            "Set-Cookie":"theme=dark",
        }
    });
}
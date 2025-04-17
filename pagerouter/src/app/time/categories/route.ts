export const dynamic = "force-static";
export async function GET() {
    const categories = [
        {id:1,name:"name1"},
        {id:2,name:"name2"},
        {id:3,name:"name3"},
        {id:4,name:"name4"},
    ]
    return Response.json(categories);   
}
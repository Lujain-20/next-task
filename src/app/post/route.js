import { post } from "./data";

export async function GET() {
    return Response.json(post)
}
export async function POST(request) {
    const newpostdata = await request.json()
    const newPost={
        id:post.length+1,
        title:newpostdata.title,
    }
    post.push(newPost)
    return new Response(JSON.stringify(newPost))
}
// export async function DELETE(request) {
//     const id = parseInt(request.url.split('/').pop(), 10);
//     const index = post.findIndex(p => p.id === id);
//     if (index !== -1) {
//         post.splice(index, 1);
//         return new Response(JSON.stringify({ message: "Post deleted" }), { status: 200 });
//     }
//     return new Response(JSON.stringify({ message: "Post not found" }), { status: 404 });
// }
"use client"
import useGetPosts from "./hooks/useGetPosts"
export default function Home() {
  const posts=useGetPosts();
  console.log({newPosts:posts});
  return (
    <main>
      <h1>POSTS</h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {posts.posts.map((item)=>(
          <div key={item.id} className="border border-[#7E7E7E] p-4 rounded">
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

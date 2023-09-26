import { getPosts } from "../utilities/utils";
import { useEffect,useState } from "react";
interface PostsData{
    userId:number;
    id:number;
    title:string;
    body:string;
}
const useGetPosts=()=>{
    const [posts, setPosts]=useState<PostsData[]>([]);
    useEffect(()=>{
      (async()=>{
        const posts=await getPosts();
        setPosts(posts);
      })();
    },[])
    return {posts}
}
export default useGetPosts

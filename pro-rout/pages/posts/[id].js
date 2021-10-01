import React from "react";
import {useRouter} from 'next/router';


const PostPage =({posts}) =>{

    // const router =useRouter();

    return(
        <>
        
            <div style={{display:"flex", alignItems:"center", fontSize:"2rem"}}>
                <img style={{width:"20rem", height:"20rem", padding:"6rem"}} src={posts.image}/>
                {posts.title}
            </div>
        </>
    )
}

PostPage.getInitialProps =async (context) => {
    const {id} =context.query;
    const res =await fetch(`https://fakestoreapi.com/products/${id}`)
    const posts=await res.json();
    return{posts}
}

export default PostPage;
import React from "react";
import  { useRouter  } from "next/router";


const Post = () => {
    const router = useRouter();
    console.log(!!router.query.id);
    return (
        <p>{!!router.query.id ? router.query.id : "test"}</p>
    )
}

export default Post;
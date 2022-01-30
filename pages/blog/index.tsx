import React, { useState, useEffect } from "react";
import { getPost } from "../../service";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import NavBar from "../../components/blog/NavBar";
import PostCard from "../../components/blog/PostCard";
import LastPost from "../../components/blog/LastPost";
import Tags from "../../components/blog/Tags";
import Footer from "../../components/blog/Footer";


const Blog = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async () => {
            const data =  await getPost()
            setPosts(data);
        })();
    }, [])
    return (
        <>
          <NavBar /> 
          <Box sx={{ height: "105px"}}/>
          <Grid container sx={{margin:"2rem 0px"}} >
            <Grid item xs={0} md={3} sx={{padding: "1.5rem 4rem"}}>
                <Stack spacing={4}>
                    <LastPost/>
                    <Tags />
                </Stack>
            </Grid>
            <Grid item xs={12} md={9} sx={{padding: "1.5rem 4rem"}}>
                { posts.length === 0 ? null : posts.map((post: any, index: number) => (
                    <PostCard  key={index} {...post}/> 
                ))}
            </Grid>
          </Grid>
          <Footer />
        </>
    )
}

export default Blog;

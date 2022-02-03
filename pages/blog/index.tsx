import React from "react";
import { getPost, getPostPopular, getPostTags } from "service/index";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import NavBar from "components/blog/NavBar";
import PostCard from "components/blog/PostCard";
import LastPost from "components/blog/LastPost";
import Tags from "components/blog/Tags";
import Footer from "components/blog/Footer";

interface Post  {
    id: string;
    title: string;
    content: string;
    author: string;
    timestamp: string;
    image: string;
}

interface BlogProps {
    lastPosts: Array<Post>;
    allPosts: Array<Post>;
    tags: Array<string>;
}

const Blog: React.FC<BlogProps> = ({ lastPosts, allPosts, tags }) => {

    return (
        <>
          <NavBar /> 
          <Box sx={{ height: "105px"}}/>
          <Grid 
            container 
            spacing={{ xs: 0, md: 3,  }} 
            sx={{
                padding: { xs:"1rem", sm: "2rem", md: "3rem"  }
            }}
          >
            <Grid 
                item 
                xs={0}
                md={3} 
                sx={{ 
                    display: { xs: "none", md: "flex" },
                }}
            >
                <Stack spacing={4}>
                    <LastPost postTitles={lastPosts.map(post => post.title)}/>
                    <Tags tags={tags} />
                </Stack>
            </Grid>
            <Grid 
                item 
                xs={12}
                md={9} 
            >
                { allPosts.map((post: any, index: number) => (
                    <PostCard  key={index} {...post}/> 
                ))}
            </Grid>
          </Grid>
          <Footer />
        </>
    )
}

export async function getStaticProps() {
    const lastPosts = await getPostPopular();
    const allPosts = await getPost();
    const tags = await getPostTags();
    return {
        props: {
            lastPosts,
            allPosts,
            tags
        }
    }
};

export default Blog;

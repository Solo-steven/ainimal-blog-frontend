/* eslint-disable react/no-children-prop */
import React from "react";
import  { useRouter  } from "next/router";
import Image from "next/image";
import useSWR from "swr";
import { getPostById, getPostPopular, getPostTags  } from "service/index";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import NavBar from "components/blog/NavBar";
import LastPost from "components/blog/LastPost";
import Tags from "components/blog/Tags";
import Footer from "components/blog/Footer";
import ReactMarkdown from "react-markdown";

interface Post  {
    id: string;
    title: string;
    content: string;
    author: string;
    timestamp: string;
    image: string;
}

interface PostProps {
    lastPosts: Array<Post>;
    tags: Array<string>;
}

const Post: React.FC<PostProps> = ({lastPosts, tags}) => {
    const router = useRouter();
    const { data, error } = useSWR<Post>(router.query.id, getPostById);

    if(error) 
        return (
            <div>Error</div>
        )

    if(router.isFallback)
        return (
            <div>Loading</div>
        )
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
                    <Tags  tags={tags}/>
                </Stack>
            </Grid>
            <Grid 
                item 
                xs={12}
                md={9} 
            >
                {
                    !data ? (null) : (
                      <Stack>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Image src={data.image} alt="image" width="700px" height="700px"/>
                        </Box>
                        <Box sx={{ textAlign: "center", fontSize: "36px", fontWeight: 600, marginTop: "1rem" }}>
                          {data.title}
                        </Box>
                        <Box>
                            <ReactMarkdown children={data.content} />
                        </Box>
                        <Stack direction="row" sx={{justifyContent: "flex-end"}} spacing={3}>
                            <Box sx={{ textAlign: "center", fontSize: "16px", fontWeight: 400 }}>
                                {data.author}
                            </Box>
                            <Box sx={{ textAlign: "center", fontSize: "16px", fontWeight: 400 }}>
                                {(() => {
                                    const date = new Date(data.timestamp);
                                    return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
                                })()}
                            </Box>
                        </Stack>                  
                      </Stack>
                    )
                }
            </Grid>
          </Grid>
          <Footer />
        </>
    )
}

export async function getStaticProps() {
    const lastPosts = await getPostPopular();
    const tags = await getPostTags();
    return {
        props: {
            lastPosts,
            tags
        }
    }
};

export function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    }
}

export default Post;
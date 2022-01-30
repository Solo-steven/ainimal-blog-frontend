import React from "react";
import  { useRouter  } from "next/router";
import Image from "next/image";
import useSWR from "swr";
import { getPostById } from "../../service";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import NavBar from "../../components/blog/NavBar";
import LastPost from "../../components/blog/LastPost";
import Tags from "../../components/blog/Tags";
import Footer from "../../components/blog/Footer";

interface PostState  {
    id: string;
    title: string;
    content: string;
    timestamp: string;
    author: string;
    image: any;
}

const Post = () => {
    const router = useRouter();
    const { data, error } = useSWR<PostState>(router.query.id, getPostById);
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
                {
                    !data ? (null) : (
                      <Stack spacing={4}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Image src={data.image} alt="image" width="700px" height="700px"/>
                        </Box>
                        <Box sx={{ textAlign: "center", fontSize: "36px", fontWeight: 600 }}>
                          {data.title}
                        </Box>
                        <Box sx={{ textAlign: "center", fontSize: "20px", fontWeight: 300 }}>
                            {data.content}
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

export default Post;
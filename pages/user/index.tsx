import React from "react";
import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import SideBar from "components/user/SideBar";
import { getUserPost } from "service/index";

const DashBoard = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const { data, error }  = useSWR(session?.user.token , getUserPost);

    if(!router.isReady || status === "loading") 
        return (
            <div>Loading</div>
        );
    if(status === "unauthenticated")
        router.push("/auth/login");
    if(error)
        return (
            <p>Error</p>
        )
    return (
        <Stack direction={"row"}>
            <SideBar />
            <Stack 
                flexGrow={1}
                sx={{
                  height:"100vh",
                  overflowY: "auto",
                }}
            >
                <Box sx={{ 
                    fontSize: "32px",
                    padding: "1rem 2rem",
                    borderBottom: "1px solid black",
                    margin: "1rem 2rem"
                }}>
                    {"新增文章"}
                </Box>
                <Grid sx={{ padding: "2rem 4rem",}}  spacing={3}>
                    {
                        data?.map((post: any) => (
                            <Grid item xs={12} key={post.id} onClick={() => { router.push(`/user/editor/${post.id}`) }}>
                                <Stack 
                                    direction="row" 
                                    sx={{
                                        backgroundColor: "#FAFAFA",
                                        borderRadius: 5,
                                        padding: "1rem 1.5rem"
                                    }}
                                    spacing={2}
                                >
                                    <Image src={post.image} alt="image" width="150px" height="150px" />
                                    <Stack spacing={3} sx={{padding: "1.5rem "}}>
                                        <Stack  direction="row" alignItems="center" spacing={2}>
                                            <Box sx={{ fontSize: 24 }}>{post.title}</Box>
                                            <Box>
                                              {(() => {
                                                  const date = new Date(post.timestamp);
                                                  return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
                                              })()}
                                            </Box>
                                        </Stack>
                                        <Stack  direction="row" alignItems="center" spacing={2}>
                                            {post.tags.map((tag: string) => (
                                                <Chip label={tag}  key={tag}/>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Grid>
                        ))
                    }
                </Grid>
            </Stack>
        </Stack>
    )
}

export default DashBoard;

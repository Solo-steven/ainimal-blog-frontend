import React from "react";
import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import SideBar from "../../components/user/SideBar";
import { getUserPost } from "../../service";


const DashBoard = () => {
    const router = useRouter();
    const { data, status } = useSession();
    const  request  = useSWR(data?.user.token , getUserPost);
    if(request.error)
        return (<p>Error</p>)
    if(status !== "authenticated" && router.isReady)
        router.push("/auth/login");
    return (
        <Stack direction={"row"} spacing={5}>
            <SideBar />
            <Box>
                <Grid 
                    container 
                    sx={{ 
                        height: "100vh", 
                        overflowY: "auto",
                        padding: "2rem 4rem",
                    }}
                    spacing={5}
                >
                    {
                        request.data?.map((post: any) => (
                            <Grid item xs={12} key={post.id}>
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
            </Box>
        </Stack>
    )

}

export default DashBoard;
import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface PostCardProps {
    img: any;
    title: string;
    content: string;
    timestamp?: string
    author?: string;
}


const PostCard: React.FC<PostCardProps> = (props: PostCardProps) => {
    return (
        <Grid container>
            <Grid item xs={12} md={4} sx={{paddingRight: "20px"}}> 
                <Image src={props.img} alt={""} />
            </Grid>
            <Grid item xs={12} md={8}>
                <Box sx={{ fontSize: "32px", fontWeight: 600 }}>
                    {props.title}
                </Box>
                <Box sx={{ fontSize: "18px", fontWeight: 300 }}>
                    {props.content.length > 50 ? props.content.slice(0, 50): props.content}
                </Box>
            </Grid>
        </Grid>
    )
}

export default PostCard;
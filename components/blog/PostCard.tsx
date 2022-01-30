import React from "react";
import Link from "next/link"
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface PostCardProps {
    id: string;
    image: any;
    title: string;
    content: string;
    timestamp?: string
    author?: string;
}


const PostCard: React.FC<PostCardProps> = (props: PostCardProps) => {
    return (
        <Grid container>
            <Grid item xs={12} md={4} sx={{paddingRight: "20px"}}> 
                <Image src={props.image} alt={""}  width="300px" height="300px"/>
            </Grid>
            <Grid item xs={12} md={8}>
                <Box sx={{ fontSize: "32px", fontWeight: 600 , "& > a ": { textDecoration: "none", color: "black"} }}>
                    <Link href={`/blog/${props.id}`}>
                        {props.title}
                    </Link>
                </Box>
                <Box sx={{ fontSize: "18px", fontWeight: 300 }}>
                    {props.content.length > 250 ? props.content.slice(0, 250): props.content}
                </Box>
            </Grid>
        </Grid>
    )
}

export default PostCard;
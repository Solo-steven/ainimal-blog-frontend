import React from "react";
import Link from "next/Link";
import Box from "@mui/material/Box";

interface LastPostProps  {
    postTitles : Array<{
        id: string;
        title: string;
    }>;
};

const LastPost: React.FC<LastPostProps> = ({postTitles}) => {
    return (
        <div>
          <Box 
            sx={{
                fontSize: "32px",
                fontWeight: 700,
                position: "sticky",
                marginBottom: "10px"
             }}
           >
               {"最新的貼文"}
          </Box>
          <Box 
            component="ul" 
            sx={{ 
                margin: "0px",
                paddingLeft: "20px" 
            }}
           >
              { postTitles.map((post, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                        alignItems: "flex-start",
                        cursor: "pointer",
                        "&::marker": {
                            color: "#f7b037",
                            fontSize: "1.5em"
                        }
                    }}
                >
                    <Box sx={{ 
                        fontSize: "1rem",
                        "& a": {
                            textDecoration: "none", color: "#000000"
                        }
                    }}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                     </Box>
                  </Box>
                ))}
          </Box>
        </div>
    )
}

export default LastPost;

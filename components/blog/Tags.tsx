import React from "react";
import Box from "@mui/material/Box";

interface TagsProps {
    tags: Array<string>;
};

const Tags: React.FC<TagsProps> = ({tags}) => {
    return (
        <div>
          <Box 
            sx={{
                fontSize: "32px",
                fontWeight: 700,
                position: "sticky",
                marginBottom: "20px"
             }}
           >
               {"貼文標籤"}
          </Box>
          <Box>
              {tags.map((tag, index) => (
                    <Box
                        key={tag}
                        sx={{
                            fontSize: "16px", 
                            padding: ".75rem 1rem ",
                            cursor: "pointer"
                        }}
                     >
                        {tag}
                     </Box>
              ))}
          </Box>
        </div>
    )
}

export default Tags;
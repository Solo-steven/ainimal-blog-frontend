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
                fontWeight: 800,
                marginBottom: "10px"
             }}
           >
               {"貼文標籤"}
          </Box>
          <Box>
              {tags.map(tag => (
                <Box
                  key={tag}
                  sx={{
                    fontSize: "16px", 
                    lineHeight: "1.5",
                    color: "#00000081",
                    padding: ".25rem .75rem ",
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
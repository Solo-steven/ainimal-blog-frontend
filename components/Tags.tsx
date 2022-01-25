import React from "react";
import Box from "@mui/material/Box";


const Tags = () => {
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
              {(new Array(10)).fill("各式各樣的標籤").map((text, index) => (
                    <Box
                        key={index}
                        sx={{
                            fontSize: "16px", 
                            padding: ".75rem 1rem ",
                            cursor: "pointer"
                        }}
                     >
                        {text}
                     </Box>
              ))}
          </Box>
        </div>
    )
}

export default Tags;
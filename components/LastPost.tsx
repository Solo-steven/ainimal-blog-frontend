import React from "react";
import Box from "@mui/material/Box";


const LastPost = () => {
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
               {"最新的貼文"}
          </Box>
          <ul>
              {(new Array(10)).fill("最新的文章標題可以很長很長很長很長很長很長").map((text, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                        alignItems: "flex-start",
                        listStyle: "disc",
                        marginLeft: "20px",
                        marginBottom: "20px",
                        "&::marker": {
                            unicodeBidi: "isolate",
                            fontVariantNumeric: "tabular-nums",
                            textTransform: "none",
                            textIndent: "0px !important",
                            textAlign: "start !important",
                            textAlignLast: "start !important",
                            color: "#f7b037",
                            fontSize: "1.5em"
                        }
                    }}
                >
                    <Box
                        sx={{
                            fontSize: "16px", 
                        }} 
                     >
                        {text}
                     </Box>
                  </Box>
              ))}
          </ul>
        </div>
    )
}




export default LastPost;

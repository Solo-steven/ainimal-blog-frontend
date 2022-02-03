import React from "react";
import Box from "@mui/material/Box";

interface LastPostProps  {
    postTitles : Array<string>;
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
              { postTitles.map((title, index) => (
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
                    <Box sx={{ fontSize: "1rem"}} >
                        {title}
                     </Box>
                  </Box>
                ))}
          </Box>
        </div>
    )
}

export default LastPost;

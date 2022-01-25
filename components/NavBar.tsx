import React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";

import Logo from "../public/logo.svg";
import { borderRadius } from "@mui/system";

const NavBar = () => {
    return (
        <AppBar 
            position="fixed" 
            sx={{ backgroundColor: '#FFFFFF', color: "#000000", height: "105px"}}
            elevation={2}
        >
            <Stack
                sx={{
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 35px",
                }}
                direction="row"
                spacing={3}
            >
                <Image src={Logo} alt="logo" width="120px" height="30px"/>
                <Button variant="text" color="inherit">{"產品"}</Button>
                <Button variant="text" color="inherit">{"技術文章"}</Button>
                <Button variant="text" color="inherit">{"關於我們"}</Button>
                <Box sx={{flexGrow: 1}}/>
                <ButtonBase 
                    sx={{
                        padding: ".75rem 1rem",
                        borderRadius: "20px",
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "#f7b037",
                        ":hover" : {
                            border: "1px solid ##f7b037",
                            backgroundColor: "#f7b1372d",
                        }
                    }}
                >
                    {"Log in"}
                </ButtonBase>
                <ButtonBase 
                    sx={{
                        padding: ".75rem 1rem",
                        borderRadius: "20px",
                        fontSize: "20px",
                        fontWeight: 500,
                        backgroundColor: "#f7b137b7",
                        color: "#FAFAFA",
                        ":hover" : {
                            border: "1px solid ##f7b037",
                            backgroundColor: "#f7b1372d",
                            color: "#f7b037",
                        }
                        
                    }}
                >
                    {"Sign Up"}
                </ButtonBase>
            </Stack>
        </AppBar>
    );
};

export default NavBar;
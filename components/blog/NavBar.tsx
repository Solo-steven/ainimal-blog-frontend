import React from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ButtonBase from "@mui/material/ButtonBase";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../public/logo.svg";

const NavBar = () => {
    return (
        <AppBar 
            position="fixed" 
            sx={{ backgroundColor: '#ffffff7a', color: "#000000", height: "105px"}}
            elevation={0}
        >
            <Stack
                sx={{
                    height: "100%",
                    alignItems: "center",
                    padding: "10px 35px",
                }}
                direction="row"
                spacing={3}
            >
                <Image src={Logo} alt="logo" width="120px" height="30px"/>
                <Box flexGrow={1}  sx={{display: { xs: "flex", md: "none" } }}>
                    <Box sx={{flexGrow: 1}}/>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Stack flexGrow={1} spacing={3} direction="row" sx={{ display: { xs: "none", md: "flex" } }}>
                    <Button variant="text" color="inherit" sx={{ "& > a": { color: "#000000", textDecoration: "none" } }}>
                        <Link href="/">
                            {"產品"}
                        </Link>
                    </Button>
                    <Button variant="text" color="inherit" sx={{ "& > a": { color: "#000000", textDecoration: "none" } }}>
                        <Link href="/blog">
                            {"技術文章"}
                        </Link>
                    </Button>
                    <Button variant="text" color="inherit">{"關於我們"}</Button>
                    <Box sx={{flexGrow: 1}}/>
                    <ButtonBase 
                        sx={{
                            padding: ".75rem 1rem",
                            borderRadius: "20px",
                            ":hover" : {
                                border: "1px solid ##f7b037",
                                backgroundColor: "#f7b1372d",
                            },
                            "& > a": {
                                fontSize: "20px",
                                fontWeight: 500,
                                textDecoration: "none",
                                color: "#f7b037",
                            }
                        }}
                    >
                        <Link href="/auth/login">
                            {"Log In"}
                        </Link>
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
                                "& > a": {
                                color: "#f7b037",
                                }
                            },
                            "& > a": {
                                fontSize: "20px",
                                fontWeight: 500,
                                textDecoration: "none",
                                color: "#FAFAFA",
                            }
                        }}
                    >
                        <Link href="/auth/register">
                            {"Sign Up"}
                        </Link>
                    </ButtonBase>
                </Stack>
            </Stack>
        </AppBar>
    );
};

export default NavBar;
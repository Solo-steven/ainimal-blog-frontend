import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from "../public/logo.svg";

const Footer =() => {
    return (
        <Box
            sx={{
                backgroundColor: "#fcca72",
                padding: "2rem 10rem",
            }}
        >
            <Grid container>
                <Grid item xs={12} sx={{display:"flex", justifyContent: "center", paddingBottom: "3rem"}}>
                    <Image src={Logo} alt="logo"/>
                </Grid>
                <Grid  item xs={12} md={4}>
                    <Stack spacing={3}>
                        <Box sx={{ textAlign: "center", color: "#FAFAFA"}}>
                            {"產品"}
                        </Box>
                        <Box sx={{ textAlign: "center", color: "#FAFAFA"}}>
                            {"部落格"}
                        </Box>
                        <Box sx={{ textAlign: "center", color: "#FAFAFA"}}>
                            {"關於我們"}
                        </Box>
                    </Stack>
                </Grid>
                <Grid  item xs={12} md={4}>
                    <Stack spacing={3}>
                        <Box sx={{ textAlign: "center", color: "#FAFAFA"}}>
                            {"常見問題"}
                        </Box>
                        <Box sx={{ textAlign: "center", color: "#FAFAFA"}}>
                            {"問題回報"}
                        </Box>
                        <Box sx={{ textAlign: "center", color: "#FAFAFA"}}>
                            {"使用條款"}
                        </Box>
                    </Stack>
                </Grid>
                <Grid  item xs={12} md={4}>
                    <Stack spacing={3}>
                        <Box sx={{ textAlign: "center", color: "#FAFAFA"}}>
                            {"追蹤我們"}
                        </Box>
                        <Box sx={{ textAlign: "center", color: "#FAFAFA"}}>
                            <FacebookIcon/>
                            <InstagramIcon />
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
            <Box sx={{
                marginTop: "4rem",
                borderTop: "1px solid #FAFAFA",
                padding: "2rem",
                color: "#FAFAFA",
                textAlign: "center",
            }}>
                {"© Copyright 2021 Ainimal. All Rights Reserved."}
            </Box>
            
        </Box>
    )
};

export default Footer;
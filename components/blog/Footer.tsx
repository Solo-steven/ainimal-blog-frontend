import React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from "../../public/logo.svg";

const FooterItem = styled(Box)({ 
    textAlign: "center", 
    color: "#FAFAFA"
});

const Footer =() => {
    return (
        <Box
            sx={{
                backgroundColor: "#fcca72",
                padding: { xs: "1rem 1rem", sm: "1.5rem 3rem",  md:"2rem 5rem", lg: "2rem 7rem"},
            }}
        >
            <Grid container spacing={{ xs: 3, sm: 0 }}>
                <Grid item xs={12} sx={{display:"flex", justifyContent: "center", paddingBottom: { xs: ".8rem", sm: "3rem"  }}}>
                    <Image src={Logo} alt="logo"/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Stack spacing={3}>
                        <FooterItem>{"產品"}</FooterItem>
                        <FooterItem>{"部落格"}</FooterItem>
                        <FooterItem>{"關於我們"}</FooterItem>
                    </Stack>
                </Grid>
                <Grid  item xs={12} sm={4}>
                    <Stack spacing={3}>
                        <FooterItem>{"常見問題"}</FooterItem>
                        <FooterItem>{"問題回報"}</FooterItem>
                        <FooterItem>{"使用條款"}</FooterItem>
                    </Stack>
                </Grid>
                <Grid  item xs={12} sm={4}>
                    <Stack spacing={3}>
                        <FooterItem>{"追蹤我們"}</FooterItem>
                        <FooterItem>
                            <FacebookIcon/>
                            <InstagramIcon />
                        </FooterItem>
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
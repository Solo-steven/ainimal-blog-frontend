import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Box from "@mui/material/Box";
import Logo from "../../public/logo.svg"
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArticleIcon from '@mui/icons-material/Article';


const SideBar = () => {
    const router = useRouter();
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#fcca72",
            minWidth: "200px",
            height: "100vh",
            padding: "3rem 0px",
        }}>
            <Image src={Logo}  alt="logo" width="160px" height="40px"/>
            <Box flexGrow={1} />
            <List>
                <ListItemButton onClick={() => { router.push("/user/editor") }}>
                    <ListItemIcon>
                        <AddCircleIcon sx={{color: "#FAFAFA"}} />
                    </ListItemIcon>
                    <ListItemText 
                        sx={{color: "#FAFAFA"}} 
                        primary={"新增貼文"} 
                    />
                </ListItemButton>
                <ListItemButton onClick={() => { router.push("/user") }}>
                    <ListItemIcon>
                        <ArticleIcon sx={{color: "#FAFAFA"}} />
                    </ListItemIcon>
                    <ListItemText 
                        sx={{color: "#FAFAFA"}} 
                        primary={"文章列表"}
                    />
                </ListItemButton>
            </List>
            <Box flexGrow={5} />
            <Box sx={{padding: "0px 1rem"}}> 
                <Box sx={{
                    color: "#ffffffe4", 
                    textAlign: "center",
                    position: "relative",
                    "&::before": {
                        position: "absolute",
                        left: "0%",
                        top: "-50%",
                        content: "''",
                        backgroundColor: "#FFFFFF94",
                        minHeight: "1px",
                        width: "100%"
                    }
                }}>
                    {"Ainimal Develop"}
                </Box>
            </Box>
        </Box>
    );
};

export default SideBar;

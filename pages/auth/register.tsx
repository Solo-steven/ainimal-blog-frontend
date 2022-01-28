import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Logo from "../../public/logo.svg";

const Register: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const { status } = useSession();
    if(status === "authenticated") 
        router.push("/dashboard");
    return (
       <Stack
            spacing={4} 
            sx={{
                display: 'flex', 
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
                backgroundColor: "#fcca72",
            }}
        >
            <Image src={Logo}  alt="Logo" />
            <Paper sx={{
                padding: "2rem 4rem",
                borderRadius: "15px",
            }}>
                <Box sx={{
                    fontSize: "32px",
                    fontWeight: 500,
                    textAlign: "center",
                    color: "#000000",
                    marginBottom: "26px",
                    minWidth: "320px"
                }}>
                    {"歡迎加入"}
                </Box>
                <Stack spacing={3}>
                    <TextField label="email" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
                    <TextField label="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}/>
                    <TextField label="password check" type="password" value={passwordCheck} onChange={(e) => { setPasswordCheck(e.target.value) }}/>
                </Stack>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "28px 0px",
                }}>
                    <Button variant="contained" fullWidth>{"註冊"}</Button>
                </Box>
                <Divider />
                <Box sx={{
                    fontSize: "24px",
                    fontWeight: 300,
                    textAlign: "center",
                    color: "#000000",
                    marginBottom: "26px",
                    minWidth: "320px",
                    margin: "28px 0px"
                }}>
                    {"已經有帳號？"}
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "28px 0px",
                }}>
                    <Button 
                        variant="outlined"
                        fullWidth 
                        onClick={() => { router.push("/auth/login") }}
                    >
                        {"登入"}
                    </Button>
                </Box>
            </Paper>
        </Stack>
    );
};

export default Register;
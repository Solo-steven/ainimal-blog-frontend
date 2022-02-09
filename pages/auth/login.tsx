import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Logo from "public/logo.svg";

const Login: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState([false, false]);
    const [helperText, setHelperText] = useState(["", ""]);
    const { status } = useSession();
    if(status === "authenticated") 
        router.push("/user");
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
                    {"歡迎回來"}
                </Box>
                <Stack spacing={3}>
                    <TextField 
                        error={valid[0]}
                        label="email" 
                        value={email} 
                        onChange={(e) => { 
                            if(valid[0] === true) 
                                setValid(pre => [false, pre[1]])
                            setEmail(e.target.value) 
                        }}
                        helperText={ valid[0] ? helperText[0] : null}
                    />
                    <TextField 
                        error={valid[1]}
                        label="password" 
                        type="password" 
                        value={password} 
                        onChange={(e) => { 
                            if(valid[1] === true)
                                setValid(pre => [pre[0], false])
                            setPassword(e.target.value) 
                        }}
                        helperText={ valid[1] ? helperText[1] : null}
                    />
                </Stack>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "28px 0px",
                }}>
                    <Button 
                        variant="contained" 
                        fullWidth 
                        onClick={ async () => { 
                            if(!email || !password) {
                                if(!email) setHelperText(pre => ["email emtpy", pre[1] ]);
                                if(!password) setHelperText(pre => [pre[0], "password emtpy" ]);
                                setValid([ !email, !password ]);
                                return;
                            }
                            const result: any =  await signIn("credentials", { 
                                redirect: false,  
                                email,
                                password,
                            })
                            if( !!result && !result?.ok) {
                                setValid([true, true]);
                                setHelperText(["worng email or password","worng email or password" ]);
                            }
                        }
                    }>
                        {"登入"}
                    </Button>
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
                    {"還沒有帳號？"}
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "28px 0px",
                }}>
                    <Button 
                        variant="outlined"
                        fullWidth 
                        onClick={() => {
                            router.push("/auth/register");

                        }}
                    >
                        {"註冊"}
                    </Button>
                </Box>
            </Paper>
        </Stack>
    );
};

export default Login;
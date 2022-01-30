import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';
import SideBar from "../../components/user/SideBar";

const mdParser = new MarkdownIt();
const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

const Editor = () => {
    const [title, setTitle] = useState("");
    const [markdown, setMarkdown] = useState("");
    return (
        <Stack direction="row" spacing={3}>
            <SideBar />
            <Stack spacing={4} sx={{width: "100%", height: "100vh", overflowY: "auto"}}>
                <Box sx={{ fontSize: 24, padding: "1rem", margin: "1rem", borderBottom: "1px solid black" }}>{"Create New Post"}</Box>
                <Stack sx={{padding: "1.5rem 4rem"}} spacing={3}>
                    <TextField 
                        value={title}
                        label="title"
                        onChange={(e) => setTitle(e.target.value) }
                        fullWidth
                    />
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <MdEditor 
                            value={markdown}
                            style={{height: "500px", width:"900px"}}
                            renderHTML={(text) => mdParser.render(text) }
                            onChange={({text}) => setMarkdown(text) }
                        />
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Button onClick={() => {}}>
                            Push
                        </Button>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default Editor;


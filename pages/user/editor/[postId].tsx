import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SideBar from "components/user/SideBar";
import { getUserPostById, getPostTags, updateAUserPost } from "service";
import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';

const mdParser = new MarkdownIt();
const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

interface EditorProps {
    tags: Array<string>;
};

const PostEditor =(props: EditorProps) => {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState<Array<string>>([]);
    const [markdown, setMarkdown] = useState("");
    const [postStatus, setPostStatus] = useState("");
    const router = useRouter();
    const { data: session, status } = useSession();
    const { data, error } = useSWR([session?.user.token, router.query.postId], getUserPostById);
    useEffect(() => {
        if(data && data.title && data.content && data.tags && data.tags.length  > 0 ) {
            setTitle(data.title);
            setTags(data.tags)
            setMarkdown(data.content);
            setPostStatus(data.status);
        }
    }, [data]);
    if(!router.isReady || status === "loading") 
        return (
            <div>Loading</div>
        );
    if(status === "unauthenticated")
        router.push("/auth/login");
    if(error)
        return (
            <div>Fetch Data Error</div>
        );
    return (
       <Stack direction={"row"}>
            <SideBar />
            <Stack 
                flexGrow={1}
                sx={{
                  height:"100vh",
                  overflowY: "auto",
                }}
            >
                <Box sx={{ 
                    fontSize: "32px",
                    padding: "1rem 2rem",
                    borderBottom: "1px solid black",
                    margin: "1rem 2rem"
                }}>
                    {"新增文章"}
                </Box>
                <Stack sx={{ padding: "2rem 4rem",}}  spacing={3}>
                    <TextField 
                        value={title}
                        label="title"
                        onChange={(e) => setTitle(e.target.value) }
                        fullWidth
                    />
                    <Box sx={{width: "100%"}}>
                        <FormControl fullWidth>
                            <InputLabel>{"Status"}</InputLabel>
                            <Select 
                                label={"Status"}
                                value={postStatus} 
                                onChange={(e) => setPostStatus(e.target.value)}
                            > 
                                <MenuItem value={"Publish"} key={"Publish"}>{"Publish"}</MenuItem>
                                <MenuItem value={"Writing"} key={"Writing"}>{"Writing"}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{width: "100%"}}>
                        <FormControl fullWidth>
                            <InputLabel>{"Tags"}</InputLabel>
                            <Select 
                                label={"Tags"}
                                value={tags} 
                                multiple
                                onChange={(e) => { 
                                    setTags((typeof e.target.value === "string") ? [e.target.value] : e.target.value)
                                  }
                                }
                            > 
                                {
                                    props.tags.map(tag =>(
                                        <MenuItem value={tag} key={tag}>{tag}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <MdEditor 
                            value={markdown}
                            style={{height: "500px", width:"900px"}}
                            renderHTML={(text) => mdParser.render(text) }
                            onChange={({text}) => setMarkdown(text) }
                        />
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Button 
                            variant="contained"
                            sx={{ width: "70%" }}
                            onClick={() => {
                                if( !session?.user.token|| !title || !markdown || tags.length ===0 || !postStatus){
                                    window.alert("input error")
                                    return;
                                }
                                console.log(session?.user.token, data.id,  title, markdown, tags, postStatus);
                                updateAUserPost(session?.user.token, data.id,  title, markdown, tags, postStatus);
                            }}
                        >
                            {"發布貼文"}
                        </Button>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
};

export async function getStaticProps() {
    const data =  await getPostTags();
    return {
        props: { tags: data }
    }
}

export function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    }
}

export default PostEditor;

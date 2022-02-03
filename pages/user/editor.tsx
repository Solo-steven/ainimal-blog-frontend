import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';
import SideBar from "components/user/SideBar";
import { getPostTags, createAUserPost } from "service"

const mdParser = new MarkdownIt();
const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

interface EditorProps {
    tags: Array<string>;
};

const Editor: React.FC<EditorProps> = (props) => {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState<Array<string>>([]);
    const [markdown, setMarkdown] = useState("");

    const { data, status } = useSession();

    console.log(data);
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
                            <InputLabel>{"Tags"}</InputLabel>
                            <Select 
                                label={"Tags"}
                                multiple
                                value={tags} 
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
                                if( !data?.user.token|| !title || !markdown || tags.length ===0 ){
                                    window.alert("input error")
                                    return;
                                }
                                console.log(data.user.token, title, tags, markdown);
                                createAUserPost(data?.user.token, title, markdown, tags);
                            }}
                        >
                            {"發布貼文"}
                        </Button>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}


export async function getStaticProps() {
    const data =  await getPostTags();
    return {
        props: { tags: data }
    }

}


export default Editor;


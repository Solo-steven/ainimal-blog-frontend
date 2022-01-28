import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';
const mdParser = new MarkdownIt();

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

const DashBoard = () => {
    const router = useRouter();
    const [markdownText, setMarkdownText] = useState("");
    const { data, status } = useSession();
    if(status !== "authenticated")
        router.push("/auth/login");
    return (
        <>
            <MdEditor 
                value={markdownText}
                style={{ height: '500px' }} 
                renderHTML={text => mdParser.render(text)} 
                onChange={({html, text})=> { setMarkdownText(text) }}
            />;
        </>
    )

}

export default DashBoard;
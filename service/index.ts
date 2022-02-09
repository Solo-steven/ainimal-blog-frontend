import axios from "axios";

const CustomeHeader = axios.create({
    baseURL: process.env.SERVER_URL
});

export async function getPostById(id: string) {
    return await CustomeHeader.get(`/post/${id}`)
    .then(response => response.data)
    .catch(err => console.log(err));
}

export async function getPost() {
    return await CustomeHeader.get(`/post`)
    .then(response => response.data)
    .catch(err => console.log(err));
}

export async function getPostTags() {
    return await CustomeHeader.get("/post/tag")
        .then(response => response.data)
        .catch(err =>  console.log(err));
}

export async function getPostPopular() {
    return await CustomeHeader.get("/post/popular")
        .then(response => response.data)
        .catch(err => console.log(err));
}

export async function login(email: string, password: string) {
    return CustomeHeader.post("/auth/login", {
        email, password
    })
    .then(response => response.data)
    .catch(err =>  console.log(err));
}

export async function getUserPost(token: string) {
    return await CustomeHeader.get("/user/post", { headers: { "Authorization": token}})
        .then(response => response.data)
        .catch(err => console.log(err));
}

export async function getUserPostById(token: string, Id: string) {
    return await CustomeHeader.get(`/user/post/${Id}`, { headers: { "Authorization": token  } })
        .then(response => response.data)
        .catch(err => console.log(err));
}

export async function createAUserPost(token: string, title: string , content: string, tags: string[]) {
    return CustomeHeader.post("/user/post",
        { title, content, tags }, 
        { headers: { "Authorization": token  } }
    )
        .then(response => response.data)
        .catch(err => console.log(err));
}
export async function updateAUserPost(token: string, id: string, title: string, content: string, tags: string[], status: string) {
    return await CustomeHeader.put("/user/post", 
        { id,  title, content, tags, status},
        { headers: { "Authorization": token  } }
    )
        .then(response => response.data)
        .catch(error => console.log(error))
}
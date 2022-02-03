import axios from "axios";

export async function getPostById(id: string) {
    return await axios({
        url: `http://localhost:5000/post/${id}`
    })
    .then(response => response.data)
    .catch(err => console.log(err));
}

export async function getPost() {
    return await axios({
        url: `http://localhost:5000/post`
    })
    .then(response => response.data)
    .catch(err => console.log(err));
}

export async function login(email: string, password: string) {
    return axios.post("http://localhost:5000/auth/login", {
        email, password
    })
    .then(response => response.data)
    .catch(err =>  console.log(err));
}

export async function getUserPost(token: string) {
    return axios.get("http://localhost:5000/user/post", { headers: { "Authorization": token}})
        .then(response => response.data)
        .catch(err => console.log(err));
}

export async function createAUserPost(token: string, title: string , content: string, tags: string[]) {
    return axios.post("http://localhost:5000/user/post",
        { title, content, tags }, 
        { headers: { "Authorization": token  } }
    )
        .then(response => response.data)
        .catch(err => console.log(err));
}

export async function getPostTags() {
    return await axios.get("http://localhost:5000/post/tag")
        .then(response => response.data)
        .catch(err =>  console.log(err));
}

export async function getPostPopular() {
    return await axios.get("http://localhost:5000/post/popular")
        .then(response => response.data)
        .catch(err => console.log(err));
}
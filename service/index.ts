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

export async function login(email: string, password: string) {
    return axios.post("http://localhost:5000/auth/login", {
        email, password
    })
    .then(response => response.data)
    .catch(err =>  console.log(err));
}

export async function getUserPost(token: string) {
    return await axios.get("http://localhost:5000/user/post", { headers: { "Authorization": token}})
        .then(response => response.data)
        .catch(err => console.log(err));
}

export async function getUserPostById(token: string, Id: string) {
    return await axios.get(`http://localhost:5000/user/post/${Id}`, { headers: { "Authorization": token  } })
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
export async function updateAUserPost(token: string, id: string, title: string, content: string, tags: string[], status: string) {
    console.log(id, title, content, tags, status);
    return await axios.put("http://localhost:5000/user/post", 
        { id,  title, content, tags, status},
        { headers: { "Authorization": token  } }
    )
        .then(response => response.data)
        .catch(error => console.log(error))
}
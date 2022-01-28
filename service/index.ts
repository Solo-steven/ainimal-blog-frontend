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
    return { token: "test" }
}

export async function register() {

}
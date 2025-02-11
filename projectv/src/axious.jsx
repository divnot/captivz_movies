  import axios from "axios";
const first =axios.create(
    {
        baseURL:"https://jsonplaceholder.typicode.com",
    }
)

export const api=(count)=>{
    return first.get(`/posts?_start=${count}&&_limit=5`);

};


export const datadel=(id)=>{
    return first.delete(`/posts/${id}`);

};


export const dataposting=(post)=>{
    return first.post("/posts/", post);

};
    
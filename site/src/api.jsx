import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    // headers: {
    //     'Authorization': `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2FvLnNpbHZhQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE2NzU4NzU2LCJleHAiOjE3MjAzNTg3NTZ9.D2c7hkJZoe-Njji1zTrWie43N9wH7vWWeyngXWtMpEnbVlpMZSA4h1S2Xt-elxSFrl7JkiKw7JJdUYTa02SKgA"}`
    //   }
})

export default api;
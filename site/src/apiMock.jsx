import axios from "axios";

const api = axios.create({
    baseURL: "https://6601e7a09d7276a755526063.mockapi.io/tatuadores",

})

export default api;
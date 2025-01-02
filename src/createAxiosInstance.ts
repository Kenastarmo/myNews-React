import axios from "axios";

const axiostInctance = axios.create({
    baseURL: "https://api.nytimes.com/svc",
})

export default axiostInctance;
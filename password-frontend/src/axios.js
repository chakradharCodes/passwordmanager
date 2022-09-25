import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const instance = axios.create({
    baseURL:'http://localhost:4000'
});
export default instance;
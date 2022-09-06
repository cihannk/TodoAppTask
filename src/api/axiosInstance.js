import axios from "axios";

const instance = axios.create({
    baseURL: "https://6316531d82797be77fe35987.mockapi.io",
});

export default instance;

import axios from "axios";

const instance = axios.create({
    baseURL: "https://portfolio-contact-4dccb.firebaseio.com/"
})

export default instance;
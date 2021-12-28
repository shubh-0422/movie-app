import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.androidhive.info/json/movies_2017.json"
});

export default instance
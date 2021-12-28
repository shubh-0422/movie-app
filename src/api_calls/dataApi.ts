// import { AxiosResponse } from 'axios';
// import  axiosinstance from './axiosinstance'
type item = {
    title:string
    image:string
    price:number | string
};

// export function Api(): Promise<item[]> {
//     fetch("https://api.androidhive.info/json/movies_2017.json")
//             .then(res => res.json())
//             .then(res => {
//                     return res as item[]
//             })
// }
export const Api = async()=>{
    fetch("https://api.androidhive.info/json/movies_2017.json")
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            return json;
        })
    }
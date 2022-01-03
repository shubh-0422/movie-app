
type item = {
    title:string
    image:string
    price:number | string
};
export const Api = async()=>{
    fetch("https://api.androidhive.info/json/movies_2017.json")
        .then((res) => res.json())
        .then((json) => {
            console.log("hi",json);
            return json;
        })
    }
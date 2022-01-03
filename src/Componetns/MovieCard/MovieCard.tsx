
import './MovieCard.scss';
import { RootState } from "../../store/reducers";
import {  AnyIfEmpty, useSelector} from "react-redux";
interface cardList{
    title:string
    image:string
    price:number | string
}

const MovieCard: React.FC = () => {
    // const state[data]=fetch("https://api.androidhive.info/json/movies_2017.json")
    // .then((res) => res.json())
    // .then((json) => {
    //     console.log("hi",json);
    //     return json;
    // })
    const state  = useSelector((state: RootState )=> state.postReducer)
    return(
        <div className='cards'>
            {state.data.map((element:cardList,index:number)=>{                
                return(
                    <div className='card'>
                        <img src={element.image}   alt='mypic' className='card-img'/>
                        <div className='card-info'>
                            <h2 className='card-title'>{element.title}</h2>
                            <h3 className='card-price'>{element.price}</h3>
                        </div>
                    </div>
                )} 
            )} 
        </div>
    )
}


export default MovieCard;

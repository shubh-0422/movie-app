import React from "react";
import './card.css'
import { RootState } from "../../store/reducers";
import {  useSelector} from "react-redux";
import {Api} from "./../../api_calls/dataApi"
interface cardList{
    title:string
    image:string
    price:number | string
}

const Card =()=>{

    const state  = useSelector((state: RootState )=> state.postReducer)
    console.log("mystate",state,Api())
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


export default Card

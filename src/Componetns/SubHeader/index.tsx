import React from "react"
import './index.css'

interface NameProps{
    name:string
}
const SubHeader = (props:NameProps)=>{
    return (
        <div className='header'>
            <h1 className='header-title'>
               {props.name}  List   
            </h1>    
        </div>
    )
}

export default SubHeader

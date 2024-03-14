import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/content.css';
import SearchZipcodes from './components/searchZipCodes';
import ZipcodeList from './components/zipcodeList';


function Content(){
    const [post, setPost] = useState(null);

    const peticion = async(codigo) =>{
        try{
            axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
            setPost(res.data)
            });
        }catch(err){
            setPost(err);
        }
    }
    


    

    return(
        <div className="main-container">
            <SearchZipcodes enviarCodigo={peticion} />
            <ZipcodeList datos={post}/>
        </div>
        
    )
}

export default Content
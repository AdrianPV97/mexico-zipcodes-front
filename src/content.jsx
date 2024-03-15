import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/content.css';
import './css/options.css';
import SearchZipcodes from './components/searchZipCodes';
import ZipcodeList from './components/zipcodeList';
import OptionsMenu from './components/optionsMenu';
import InfoCard from './components/infoCard';


function Content(){
    const [post, setPost] = useState(null);

    const peticion = async(codigo) =>{
        try{
            axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
            //console.log(res.data);
            setPost(res.data)
            });
        }catch(err){
            setPost(err);
        }
    }

    const funcionPrueba = ()=>{
        console.log("Funciona funcion prueba!");
    }
    


    

    return(
        <div className="main-container">
            <SearchZipcodes enviarCodigo={peticion} />
            {post != null ? <ZipcodeList datos={post}/> : null}
            <OptionsMenu/>
            <InfoCard/>
            
        </div>
        
    )
}

export default Content
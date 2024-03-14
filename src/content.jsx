import React, { useState } from 'react';
import axios from 'axios';
import './css/content.css';
import SearchZipcodes from './components/searchZipCodes';
import ZipcodeList from './components/zipcodeList';


function Content(){

    // const [post, setPost] = useState(null);

    // React.useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
    //         setPost(res.data);

            
    //     });
    // }, []);


    

    return(
        <div className="main-container">
            <SearchZipcodes/>
            <ZipcodeList/>
        </div>
        
    )
}

export default Content
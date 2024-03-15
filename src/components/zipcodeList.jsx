import React, { useState, useEffect } from 'react';

function ZipcodeList({datos}) {
    //console.log(post);
    function mostrar(){
        console.log(datos)
    }
    return(
        <div className="card-block-item">
            <li> <span className="info-titles"> Title: </span> <span className="info-body"> {datos.title}</span></li>
            <br />
            <li> <span className="info-titles"> Info: </span> <span className="info-body"> {datos.body} </span></li>
        </div>
    )
}


export default ZipcodeList
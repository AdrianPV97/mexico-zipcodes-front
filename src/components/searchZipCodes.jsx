import React, { useState } from 'react';



function SearchZipcodes({enviarCodigo}) {
    const [error, setError] = useState("");
    const [code, setCode] = useState("");

    function readInput(ev){
        console.log()
        if(parseInt( ev.target.value) || ev.target.value == " "|| ev.target.value == "" || ev.target.value == "0"){
            setError("");
        }else{
            setError("Introduce solo números");
        }
    }

    function enviarFormulario(evt) {
        evt.preventDefault();
        enviarCodigo();
        // console.log(evt.target.zpcode.value.length);
        // if (evt.target.zpcode.value.length = 5) {
        //     console.log("Enviando.....")
        // } else { }
    }

    return (
        <form className="search-zipcode" onSubmit={enviarFormulario}>
            <label htmlFor="zpcode">Ingresa un código postal</label> <br />
            <div className="search">
                <input type="text" minLength={5} maxLength={5} pattern='[0-9]{1,5}' placeholder='04330' name="zpcode" id="input-code" onChange={readInput} />
                <button type='submit'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </button>
            </div>
            <span className="error-message">{error}</span>
        </form>

    )
}

export default SearchZipcodes

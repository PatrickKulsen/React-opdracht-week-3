import React from 'react';

function Button({buttonText, disableButton}) {

    function clickButton1() {
        console.log({buttonText});
    }


    return (
        <button type="button" disabled={disableButton} onClick={clickButton1}>{buttonText}</button>
           )
}

export default Button
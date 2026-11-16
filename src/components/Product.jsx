import React from 'react';

function Product({redLabel, image, bagName, bagPrice}) {

    return (
        <article>
            <span>{redLabel}</span>
            <img src={image} alt="{bagName}" />
            <p>{bagName}</p>
            <h4>€{bagPrice},-</h4>
        </article>
    )
}

export default Product
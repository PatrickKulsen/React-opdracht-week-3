import React from 'react';

function Tile({tileType, image, tileTitle, tileText}) {
    if (tileType=== "photo") {
        return (
            <section>
                <img src={image} alt={tileText}/>
            </section>
        )
    }

    else {
        return (
                <section>
                    <h2>{tileTitle}</h2>
                    <p>{tileText}</p><br/>
                    <p>{tileText}</p>
                </section>
            )
    }

}

export default Tile
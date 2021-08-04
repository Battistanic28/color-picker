import React from 'react';
import {useParams, Link} from 'react-router-dom';


function ColorDetail() {
    const {color} = useParams();

    return(
        <body style={{
            backgroundColor: color
          }}>
            <h1>{color}</h1>
            <Link to={`/colors`}>
                <button>Go back</button>
            </Link>
        </body>
    )

}

export default ColorDetail;
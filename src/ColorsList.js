import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import ColorAdd from './ColorAdd.js';
import {v4 as uuid} from 'uuid';

function ColorsList() {

    const initialState = [
        {colorName: "red", colorValue: "#FF0000"},
        {colorName: "blue", colorValue: "#0000FF"},
        {colorName: "green", colorValue: "#00FF00"},
    ];

    const [colors, setColors] = useState(initialState)

    const addColor = (colorName, colorValue) => {
        setColors(colors => [...colors, {colorName, colorValue}])
    }

    return (
        <>
        <h1>Check out all these colors!</h1>
        {/* <Link to="/colors/add">Add a color</Link> */}
            <ColorAdd addColor={addColor} />
        <ul>
            {colors.map(color => (
                <Link key={uuid()} to={`/colors/${color.colorName}`}>
                    <li>{color.colorName}</li>
                </Link>
            ))}
        </ul>
        </>
    )
}

export default ColorsList;
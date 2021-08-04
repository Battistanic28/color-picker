import {React, useState} from 'react';


function ColorAdd({addColor}) {
    const initialState = {
        colorName: "",
        colorValue: "#000000"
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {colorName, colorValue} = formData;
        addColor(colorName, colorValue)

        setFormData(initialState)
    }

    return(
        <>
        <h1>Add a color</h1>
        <form onSubmit={handleSubmit}>
            <input 
                name="colorName"
                value={formData.colorName} 
                type="text"
                onChange={handleChange}
                ></input>
            <input 
                name="colorValue"
                value={formData.colorValue} 
                type="color"
                onChange={handleChange}
                ></input>
            <button>Add a color </button>
        </form>
        </>
    )

}

export default ColorAdd;
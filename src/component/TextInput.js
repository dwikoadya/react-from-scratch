import React from 'react'

function TextInput(props) {
    const { onInputChange } = props
    return (
        <input type="text"
        onChange={onInputChange}/>
    )
}

export default TextInput
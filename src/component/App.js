import React, { useState } from 'react'
import Button from './Button'
import TextInput from './TextInput'

function App() {

    const [inputValue, setInputValue] = useState('')

    const color = 'red'

    function handleOnButtonClick() {
        // console.log('button Clicked')
        alert(inputValue)
    }

    function handleOnInputChange(event) {
        // console.log(event.target.value)
        setInputValue(event.target.value)
    }

    return (
        <div>
        APP: {inputValue}
        <br/>
        <TextInput onInputChange={handleOnInputChange} />
        <Button color={color} onButtonClick={handleOnButtonClick} />
        </div>
    )
}

export default App
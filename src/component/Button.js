import React from 'react'

function Button(props) {
    const { onButtonClick } = props
    return (
        <button
            onClick={onButtonClick}
            style={{ color: props.color }}
            type="button">
            Klik
        </button>
    )
}

export default Button
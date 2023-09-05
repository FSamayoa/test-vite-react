import React from 'react'

export const PersonaItem = (props) => {
    return (
        <div>
            <hr />
            <h3>Nombre: {props.name}</h3>
            <h4>Edad: {props.age}</h4>
            <p>Signo: {props.signo}</p>

        </div>
    )
}

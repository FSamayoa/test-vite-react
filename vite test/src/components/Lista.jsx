import React from 'react'
import { PersonaItem } from './PersonaItem'

export const Lista = (props) => {
  return (
    <div>
        {props.listado.map(persona=>{
            return <PersonaItem name={persona.name} age={persona.age} signo={persona.signo}/>
        })}
    </div>
  )
}

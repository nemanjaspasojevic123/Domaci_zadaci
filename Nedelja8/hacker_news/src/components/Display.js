import React, { useState, useEffect } from 'react'
import { getStory } from '../services/hackerNews'
import { mapTimeString } from '../utils/MApTimeString'
export const Display = ({displayId}) => {
    const [display, setDispay] = useState({})


    useEffect(() => {
        getStory(displayId).then(dunja => dunja && setDispay(dunja)) //eslint-disable-next-line
    },[])
   
    return (
        <>
        <div className="displayClass">
        <a href={display.url} target="_blank" rel="noopener noreferrer">
            <h3>{display.title}</h3>
        </a>
        <p>Autor: {display.by}</p>
        <p>Objavljeno pre: {mapTimeString(display.time)}</p>
        <p>{display.type}</p>
        </div>
        </>
    )
}
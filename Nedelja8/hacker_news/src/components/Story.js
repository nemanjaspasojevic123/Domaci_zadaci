import React, { useState, useEffect } from 'react'
import { getStory } from '../services/hackerNews'
import { mapTimeString } from '../utils/MApTimeString'
export const Story = ({storyId}) => {
    const [story,setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(dunja => dunja && setStory(dunja)) //eslint-disable-next-line
    },[])
   
    return (
        <>
        <div className="storyClass">
        <a href={story.url} target="_blank" rel="noopener noreferrer">
            <h3>{story.title}</h3>
        </a>
        <p>Autor: {story.by}</p>
        <p>Objavljeno pre: {mapTimeString(story.time)}</p>
        <p>{story.type}</p>
        </div>
        </>
    )
}
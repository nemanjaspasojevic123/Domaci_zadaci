import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/hackerNews';
import { Story } from '../components/Story';
import { Display } from '../components/Display';

export const StoriesContainer = () => {
  const [storyIds,setStoryIds] = useState([]);
  const [displayIds, setDisplayIds] = useState([]);
  const [counter,setCounter] = useState(20)

  useEffect(() => {
    getStoryIds().then(dunja => setStoryIds(dunja))
  },[])

  // useEffect waits ...

const displayOld = () => {
    setCounter(counter + 20)
    getStoryIds().then(element => setDisplayIds(element))
}

  return (
    <>
        <div>
            <input type="button" onClick={(e) => {displayOld(e)}} className="btn" value="Starije objave"></input>
        </div>
        {displayIds.slice(counter, counter + 20).map(displayId => <Display displayId={displayId} key={displayId}/>)}
        {storyIds.slice(0,counter).map(storyId => <Story storyId={storyId} key={storyId}/>)}
    </>
  )
}
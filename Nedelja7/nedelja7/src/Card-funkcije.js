import React from 'react'
import EmojiFje from './Emoji-funkcije'
import DescriptionFje from './Description-funkcije'

const CardFje = (props) => {
    return(
        <>
        <EmojiFje url={props.url}></EmojiFje><br></br>
        <DescriptionFje description={props.description}></DescriptionFje>
        </>
    )
}
export default CardFje
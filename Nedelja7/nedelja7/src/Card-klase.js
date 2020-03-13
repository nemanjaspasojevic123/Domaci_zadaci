import React from 'react'
import EmojiKlase from './Emoji-klase'
import DescriptionKlase from './Description-klase'

class CardKlase extends React.Component{
    render(){
        return(
            <>
            <EmojiKlase url={this.props.url}></EmojiKlase><br></br>
            <DescriptionKlase description={this.props.description}></DescriptionKlase>
            </>
        )
    }
}
export default CardKlase
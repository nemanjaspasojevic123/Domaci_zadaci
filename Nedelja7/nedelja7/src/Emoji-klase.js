import React from 'react'

class EmojiKlase extends React.Component{
    render(){
        return(
            <img src={this.props.url} style={{height: "150px"}, {width: "150px"}}></img>
        )
    }
}

export default EmojiKlase
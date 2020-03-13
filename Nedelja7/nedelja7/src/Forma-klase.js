import React from 'react'
import { render } from 'react-dom';

class FormaKlase extends React.Component{
        render(){
            return(
                <>
                <input type="text"></input>
                <button>{this.props.string}</button>
                </>
            )
        }
}
export default FormaKlase
import React from 'react'
import Contacts from './Contacts';
import Message from './Message';
import data from './data'
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: [],
            filtrirano: [],
            filtrirajImenik: [],
            name: '',
            number: ''
        }
    }
    handleName(e){
        let name = e.target.value;
        this.setState({
            name: name
        })
    }
    
    handleNumber(e){
        let number = e.target.value;
        this.setState({
            number: number
        })
    }
    
    handleClick(){
        if(this.state.name.trim() === '' || this.state.number.trim() === ''){
            this.setState({
                message: 'UNOS NE MOZE BITI PRAZAN'
            })
        }else if(!this.state.number.startsWith('+')){
            this.setState({
                message: 'BROJ MORA POCINJATI SA + I BITI U FORMATU +ххх ххххххххх'
            })
        }
        if(this.state.contacts.find(el => el.name === this.state.name)){
            if(window.confirm('KONTAKT VEC POSTOJI. DA LI ZELITE DA DA GA PONOVITE?')){
                let contact = {
                    name: this.state.name,
                    number: this.state.number
                }
                this.state.contacts.splice(0, 0, contact);
                    this.setState({
                    contacts: this.state.contacts,
                    filtrirano: this.state.contacts
                    })
            }else{
                return
            }
        }
        else{
        let contact = {
            name: this.state.name,
            number: this.state.number
        }
        
        
        this.state.contacts.push(contact);
        this.setState({
            contacts: this.state.contacts,
            filtrirano: this.state.contacts
        })
        }
    }

    handleFilter(e){
        let filtrirano = this.state.contacts.filter(el =>  el.name.includes(e.target.value));
        // let filtrirajImenik = data.filter(el => el.name.includes(e.target.value));
        this.setState({
            filtrirano: filtrirano, 
        })
    }
   
    render() {
        return(
            <>
            <div>
                <input type="text" onChange={(e) => this.handleName(e)} placeholder="Ime i Prezime" />
                <input type="text" onChange={(e) => this.handleNumber(e)} placeholder="Broj telefona" />
                <button onClick={() => this.handleClick()}>Dodaj kontakt</button>
                <input type="text" onChange={(e) => this.handleFilter(e)} placeholder="Filter"/>
            </div>
            <div>
                <Message message={this.state.message}/>
            </div>
            <div>
                <Contacts contacts={this.state.filtrirano} />
                <Contacts contacts={data} /> 
            </div>
            </>
        )
    }
    
}
export default Form

// Filter radi samo za nove unose, za kontakte iz data ne umem da napravim filter
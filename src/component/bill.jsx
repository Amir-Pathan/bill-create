import React,{Component} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Link} from 'react-router-dom'

class Bill extends Component{
    constructor(){
        super()
        this.state={
                bill:[],
                productName:'',
                price :'',
                qty :'',
                pValidate :'',
                priceValidate:'',
                quantityValidate:''
        }
        this.addItem=this.addItem.bind(this)
    }

    addItem(){
        if(!this.state.productName&&!this.state.price&&!this.state.qty){
            alert('Fill Details')
        }
        else {
        if(this.state.pValidate.length===0&&this.state.priceValidate.length===0&&this.state.quantityValidate.length===0){
            const productName=this.state.productName
        const quant=this.state.qty
        const price=this.state.price
        const no = Number(price)
        const flt = parseFloat(quant)
        const total =no*flt
        this.state.bill.push({
            productName,quant,price,total
        })
        this.setState({
            ...this.state,
            productName:'',
            price :'',
            qty:''
        })
        console.log(this.state.bill);
        }
        else{
            alert('fill correct details')
    }
}
    }

    producthandler(e){
       if(e.target.value.length===0){
           this.setState({
               ...this.state,
               pValidate : 'Required',
               productName:''
           })
       }
       else{
           this.setState({
               ...this.state,
               productName :e.target.value,
               pValidate :''
           })
       }
    }

    pricHander(e){
        const digit = /\D/g;
        if(!e.target.value){
            this.setState({
                ...this.state,
                priceValidate:"Required",
                price :""
            })
        }
        else if(digit.test(e.target.value)){
            this.setState({
                ...this.state,
                priceValidate : 'Please Enter No',
                price :''
            })
        }
        else{
            this.setState({
                ...this.state,
                price :e.target.value,
                priceValidate:''
            })
        }
    }

    quantityHandler(e){

        const word = /[a-z,A-Z]/g

       if(!e.target.value){
           this.setState({
               ...this.state,
               quantityValidate:'Required',
               qty :''
           })
       }
       else{
        if(word.test(e.target.value)){
            this.setState({
                ...this.state,
                quantityValidate:'Enter No',
                qty:''
            })
        }
        else{
            this.setState({
                ...this.state,
                qty : e.target.value,
                quantityValidate :""
            })
        }
       }
    }

    refresh(){
        this.setState({
            ...this.state,
                productName:'',
                price :'',
                qty :'',
                pValidate :'',
                priceValidate:'',
                quantityValidate:''
        })
    }

    render(){
        return(
            <div className='shopdetails'>
                <h1>Fill Details</h1>
                <TextField label='Product Name' size='small'
                value={this.state.productName} 
                onChange={this.producthandler.bind(this)}/>
                <p>{this.state.pValidate}</p>
                <TextField label='Product Quantity' size='small'
                value={this.state.qty} onChange={this.quantityHandler.bind(this)}/>
                <p>{this.state.quantityValidate}</p>
                <TextField label='Product Price' size='small'
                 value={this.state.price} onChange={this.pricHander.bind(this)}/>
                <p>{this.state.priceValidate}</p>
                <ButtonGroup color='primary' variant='outlined'>
                    <Button onClick={this.refresh.bind(this)}>Refresh </Button>
                    <Link to='/'>
                       <Button>Cancell</Button>
                    </Link>
                    <Button onClick={this.addItem}>Add</Button>
                    <Link to={{
                        pathname:'/billShow',
                        state:this.state.bill
                    }}>
                        <Button>Done</Button>
                    </Link>
                </ButtonGroup>
            </div>
        )
    }

}

export default Bill
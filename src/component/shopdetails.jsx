import React,{useEffect, useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom'

function ShopDetails(){

   const [shopName,setShopName] = useState('')
   const [name,setName] = useState('')
   const [no,setNo] = useState('')
   const [address,setAddress] = useState('')

   const [shopNameValidate,setShopNameValidate] = useState('')
   const [noValidate,setNoValidate] = useState('')
   const [nameValidate,setNameValidate] = useState('')

   const history = useHistory()

   useEffect(()=>{
      const data =localStorage.getItem('shopDetails')
      const dat=JSON.parse(data)
      console.log(dat);
      if(dat!==null){
        console.log(dat);
        setShopName(dat.shopName)
        setName(dat.name)
        setNo(dat.no)
        setAddress(dat.address)   
      }
   },[])

   const shopNameHandler=(e)=>{
        setShopName(e.target.value)
        if(!e.target.value){
            setShopNameValidate('Require')
        }
       else{
            setShopNameValidate('')
        }
        if(e.target.value.length>25){
            setShopNameValidate('Shop Name under 25 char')
        }
       }

   const noHandler=(e)=>{
       setNo(e.target.value)
       const n =/\D/g;
       if(n.test(e.target.value)){
           setNoValidate('Please Enter Valid No')
       }
       else{
           setNoValidate('')
       }
       if(e.target.value.length>10){
           setNoValidate('No is Not Valid')
       }
       if(!e.target.value){
           setNoValidate('Required')
       }
   }

   const addressHandler=(e)=>{
       setAddress(e.target.value)
   }

   const nameHandler=(e)=>{
       setName(e.target.value)
       if(!e.target.value){
           setNameValidate('Required')
       }
       else{
           setNameValidate('')
           if(e.target.value.length>15){
               setNameValidate('Enter Name Under 15 Char')
           }
       }
    }

    const save=()=>{
        if(!shopNameValidate&&!nameValidate&&!noValidate){
             const details={
                 shopName,
                 name,
                 no,
                 address
             }
             localStorage.setItem('shopDetails',JSON.stringify(details))
             history.push('/')
        }
        else{
            alert('Fill Correct Details')
        }
    }

    const home=()=>{
        history.push('/')
    }

    return(
        <div className='shopdetails'> 
            <h1>Fill Shop Details</h1>
            <TextField value={shopName} onChange={shopNameHandler} 
            size='small' label='shop Name'/>
            <p>{shopNameValidate}</p>
            <TextField value={name} onChange={nameHandler} 
            size='small' label='Name'/>
            <p>{nameValidate}</p>
            <TextField size='small' label='Addresss' value={address}
            onChange={addressHandler}/>
            <p></p>
            <TextField value={no} onChange={noHandler}
            size='small' type='no' label='Phone Number'/>
            <p>{noValidate}</p>
            <div>
                <Button cursor='pointer' variant='outlined' 
                size='small' color='primary' className='btn'
                onClick={home}>
                    Cancell
                </Button>
                <Button cursor='pointer' variant='outlined' 
                size='small' color='primary'className='btn' onClick={save}>
                    Save
                </Button>
            </div>
        </div>
    )
}

export default ShopDetails
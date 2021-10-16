import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import BillItem from './billItem'

function BillShow(){

    const [bill,setBill] = useState([])
    const [shopDetails,setShopDetails] = useState({})
    const [calculte,setCalculete] = useState(0) 
    const [no,setNo] = useState(0)

    const date = new Date()

    const location = useLocation()

    let total=0;

    useEffect(()=>{
        setBill(location.state)
        console.log(location.state);
        const shop = localStorage.getItem('shopDetails')
        const pr = JSON.parse(shop)||{}
        setShopDetails(pr)
        console.log(bill);
        if(bill.length>0){
            bill.forEach((i)=>{
                total=total+i.total 
                setCalculete(total)
            })
        }
        setNo(1)
    },[no])

    console.log(total);

    return( 
    <div>
        {
            bill.length===0?
              <h1>No Item To Create Bill</h1>:
                <div>
                    <div>
                    <h2 style={{
                        textAlign:'center'
                    }}>{shopDetails.shopName}</h2>
                    <div style={{
                        display:'flex',
                        flexDirection:"row",
                        justifyContent:'space-around'
                    }}>
                        <h3>Name : {shopDetails.name}</h3>
                        <h3>No : {shopDetails.no}</h3>
                        <h3>Date : {date.getDate()}/{date.getMonth()}/{date.getFullYear()} </h3>
                    </div>
                   <h5 style={{
                       textAlign:'center'
                   }}>{shopDetails.address}</h5>
                    </div>
                    <div className='item'>
                        <h3>Product Name</h3>
                        <h3>Quantity</h3>
                        <h3>Price</h3>
                        <h3>Amount</h3>
                    </div>
                    {
                        bill.map((i,index)=>{
                            return <BillItem key={index} productName={i.productName} price={i.price}
                            quantity={i.quant} total={i.total}/>
                        })
                    }
                    <div style={{
                        marginLeft:'50%',
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-around'
                    }}>
                        <h5>Total :</h5>
                        <h5>{calculte}</h5>
                    </div>
                </div>
        }
    </div>
    )
}

export default BillShow
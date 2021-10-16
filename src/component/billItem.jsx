import React from 'react'

function BillItem(props){
    const {productName,price,quantity,total} = props
    return(
        <div className='item'>
           <h4 style={{
               textAlign:"center"
           }}>{productName}</h4>
           <h4 style={{
               textAlign:"center"
           }}>{quantity}</h4>
           <h4 style={{
               textAlign:"center"
           }}>{price}</h4>
           <h4 style={{
               textAlign:"center"
           }}>{total}</h4>
        </div>
    )
}
export default BillItem
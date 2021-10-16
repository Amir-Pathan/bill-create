import React from 'react'
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom'

function Header(){

    const history = useHistory()

    const shopDetails=()=>{
        history.push('/shopDetails')
    }

    const bill=()=>{
        history.push('/bill')
    }

   return(
       <div className='headr'>
           <h3>Create-Bill</h3>
           <div>
               <Button variant='outlined' size='small' color='primary'
               onClick={bill}>Create-Bill</Button>
               <Button variant='outlined' size='small' color='primary'
               onClick={shopDetails}>Edit-Shop Details</Button>
           </div>
       </div>
   )
}

export default Header
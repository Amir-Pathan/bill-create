import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './header'
import ShopDetails from './shopdetails'
import Bill from './bill'
import BillShow from './billshow'

function Routing(){
    return(
       <div>
           <Router>
               <Switch>
                   <Route exact path='/'>
                      <Header/>
                   </Route>
                   <Route path='/shopDetails'>
                       <ShopDetails/>
                   </Route>
                   <Route path='/bill'>
                       <Bill/>
                   </Route>
                   <Route path='/billShow'>
                       <BillShow/>
                   </Route>
               </Switch>
           </Router>
       </div>
    )
}

export default Routing
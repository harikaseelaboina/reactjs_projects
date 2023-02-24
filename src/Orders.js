import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './container/Header'

const Orders = ({order_details}) => {
  return (
    <div className='mt-3'>
      <center>
        <Header/>
        
      {order_details.length>0?<div className='container'>
                       <div className='row'>
                        {order_details.map((item)=>
                        <div className='col-md-4 '  style={{padding:"5px"}} key={item.id}>
                            <div className='card' style={{width:"18rem",padding:"5px"}}>
                                <img src={item.url} className="card-img-top" alt={item.name} />
                                <div>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <p className='card-text'>Billing amount Rs.{item.prize}</p>
                                    <p>Table number:{item.table_number}</p>
                                </div>

                            </div>

                        </div>)}
                       </div>
                       </div>
                       :
                       <div>No orders placed</div>
      }

<button className='btn btn-sm btn-primary mt-5'>
  <Link to="/" style={{color:"white",textDecoration:"none"}}>Bcak to Home page </Link></button>
    
      </center>
      </div>
  )
}

const mapStatetoProps=state=>({
  order_details:state.orderReducer
})

export default connect(mapStatetoProps)(Orders)

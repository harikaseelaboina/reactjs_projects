import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({count}) => {
  return (
    <div>
      <navbar className="navbar navbar-light bg-light ">
        <a href="####" className='navbar-brand'>Restaurant</a>
        <button className='btn btn-primary'>
          <Link to="/orders" style={{color:'white',textDecoration:"none"}} >Orders</Link>
          <span className='badge bg-secondary'>{count}</span>
          </button>

      </navbar>
    </div>
  )
}

const mapstatetoprops=(state)=>({
  count:state.orderReducer.length
})

export default connect(mapstatetoprops)(Header)

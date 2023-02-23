import React from 'react'
import "./index.css"

import { connect } from 'react-redux'

const Badge = ({products}) => {
  return (
    <div>
        <center>
      <button className='btn1'>Total Products In Cart       
        <span className='spanitem'>{products.length}</span>
        
      </button>
      </center>
    </div>
  )
}

const mapStatetoProps=state=>(
            {products:state} )

export default connect(mapStatetoProps)(Badge)

import React from 'react'
import { connect } from 'react-redux'

import { setfilter } from '../Action/action'
import { resetfilter } from '../Action/action'

const Filter = ({setfilter,resetfilter,filter_name}) => {
    const products=["All Items","Rice Items","Pizza","Cold Drinks","Hot Drinks"]
 
    // const [food,setFood] =React.useState("All items")

  return (
    <div>
      <center className='mt-3'>
        <span style={{fontWeight:"bold"}}     className="m-2"    >Filter :</span>
        <select onChange={(e=>setfilter(e.target.value))}     className="m-2"      style={{fontWeight:"bold"}}>
            {products.map((eachitem,index)=>(
                <option value={eachitem} key={index} style={{fontWeight:"bold"}}>{eachitem}</option>
            ))}
        </select>
        <button className="m-2 btn btn-sm btn-primary" onClick={()=>console.log(filter_name)}>Submit</button>
      </center>
    </div>
  )
}

const mapStatetoProps=state=>({
                           filter_name:state.filterReducer.filter_name})

export default connect(mapStatetoProps,{setfilter,resetfilter})(Filter)

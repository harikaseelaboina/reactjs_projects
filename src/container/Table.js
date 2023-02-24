import React from 'react'
import { connect } from 'react-redux';
import {selecttablenum} from "../Action/action";
import { resettablenum } from '../Action/action';

const Table = ({selecttablenum,table_no,resettablenum}) => {
    const num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const inactiveBtn='btn btn-outline-primary';
    const activeBtn='btn btn-outline-primary active';

    // const [table,setTable]=useState(null)
  return (
    <div className='mt-3'>
        <h5 style={{fontWeight:"bold"}}>Tables</h5>
        <p style={{color:'blue',fontWeight:"bold"}}>Please select your table to place order</p>
      {num.map((item,index)=>(
        <div style={{display:"inline",margin:3}}>
            <button className={table_no===item?activeBtn:inactiveBtn}   
                     key={index}  
                    onClick={()=>selecttablenum(item)}>
                        {item}   </button>  </div>
      ))}
    </div>
  )
}

const mapStatetoProps=state=>({
              table_no: state.tableReducer.table_number})



export default connect(mapStatetoProps,{selecttablenum,resettablenum})(Table)

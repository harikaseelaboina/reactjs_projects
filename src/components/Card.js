import React,{useState} from 'react'
import "./index.css"
import { connect } from 'react-redux'
import { additem } from '../Action/actions'
import { removeitem } from '../Action/actions'

const Card = ({additem,removeitem,products}) => {
 const [item,setItem]=useState("");

  const changeHandler=(event)=>{
    setItem(event.target.value)
  }

  const submitHandler=async e=>{
    e.preventDefault();
    if(item!==""){
      await additem({name:item});
      setItem("")
    }
    setItem("");
  }

  return (
    <div className='container'>
        <center>
            <form onSubmit={submitHandler} className='bg1'>
                <input type="text" className='inputelement' value={item} onChange={changeHandler}/>
                <input type="submit" className='btn2' value="ADD TO CART" />
            </form>
            <div className='itemcontainer'>
            <h3 className='head1'>Items in cart </h3>
            {products.map(eachitem=><div className='item1'>{eachitem.name}<span className='spanitem1' onClick={()=>removeitem(eachitem.name)}>
                                        X</span> </div>)} 
                                        </div>
        </center>
      
    </div>
  )
}

const mapStatetoProps=state=>({products:state})


export default connect(mapStatetoProps,{additem,removeitem})(Card)

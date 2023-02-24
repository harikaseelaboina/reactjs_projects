import React,{useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { addorder, resetfilter, resettablenum } from '../Action/action';


const Card = ({filter_name,addorder,table_number,resetfilter,resettablenum}) => {
    const [data,setData]=useState([])
    const [alldata,setAlldata]=useState([])

useEffect( ()=>{
fetch("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json")
.then(response=>response.json())
.then((json)=>{
              setData(json.items);
              setAlldata(json.items);
})},
    [])

useEffect(()=>{
            if (filter_name!=="All Items"){
            let specificdata=alldata.filter(i=>i.category===filter_name);
            setData(specificdata)
          }
          else{
            setData(alldata)
          }
},[filter_name])

const clickHandler=async (id,name,prize,url)=>{
         if(table_number!=null){
          await addorder(id,name,prize,url,table_number);
          await resetfilter();
          await resettablenum();   
          alert("Orderb placed successfully")
         }
         else{
          alert("Please select table number")
         }
}

  return (
    <div>
      {data.length>0?<div className='container'>
                       <div className='row'>
                        {data.map((item)=>
                        <div className='col-md-4 '  style={{padding:"5px"}} key={item.id}>
                            <div className='card' style={{width:"18rem",padding:"5px"}}>
                                <img src={item.url} className="card-img-top" alt={item.name} />
                                <div>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <p className='card-text'>Rs.{item.prize}</p>
                                    <button className='btn btn-sm btn-primary' 
                                           onClick={()=>clickHandler(item.id,item.name,item.prize,item.url)}>
                                            Order</button>
                                </div>

                            </div>

                        </div>)}
                       </div>
                       </div>
                       :
                       <div><spinner>loading...</spinner></div>
      }
    </div>
  )
}

const mapStatetoProps=state=>({
                filter_name:state.filterReducer.filter_name,
                table_number:state.tableReducer.table_number
})
export default connect(mapStatetoProps,{addorder,resetfilter,resettablenum})(Card)

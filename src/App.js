import React from 'react'
import { connect } from 'react-redux'
import {increase_playertwo_Score,increase_playerone_Score,
        decrese_playerone_Score,decrese_playertwo_Score,six_playerone,six_playertwo,
         four_playerone,four_playertwo} from "./Actions/actions"

const App = ({playerone,playertwo,decrese_playerone_Score,decrese_playertwo_Score,
                increase_playertwo_Score,increase_playerone_Score,six_playerone,six_playertwo,
                 four_playerone,four_playertwo}) => {
  return (
    <div> 
      <center>
     <h1>player onedetails</h1>
     <p>name:{playerone.name}</p>
     <p>score:{playerone.score}</p>
     <button onClick={()=>increase_playerone_Score()}>Increment</button>
     <button onClick={()=>decrese_playerone_Score()}>decrement</button>
     <button onClick={()=>six_playerone()}>six</button>
     <button onClick={()=>four_playerone()}>four</button>

     <h1>player two details</h1>
     <p>name:{playertwo.name}</p>
     <p>score:{playertwo.score}</p>
     <button onClick={()=>increase_playertwo_Score()}>Increment</button>
     <button onClick={()=>decrese_playertwo_Score()}>decrement</button>
     <button onClick={()=>six_playertwo()}>six</button>
     <button onClick={()=>four_playertwo()}>four</button>
     </center>
    </div>
  )
}
const mapStateToProps=state =>(
  {playerone : state.playerone,
  playertwo : state.playertwo}
)
  

export default connect(mapStateToProps,{increase_playerone_Score,increase_playertwo_Score,
  decrese_playerone_Score,decrese_playertwo_Score,six_playerone,six_playertwo,
   four_playerone,four_playertwo})(App)

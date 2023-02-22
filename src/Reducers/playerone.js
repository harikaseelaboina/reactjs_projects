const initialState={
    name:"jhon",
    score:80
}

const PlayeroneReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case "INC_PLYone_SCORE":
            return {...state,score:state.score+1}
    
    case "DEC_PLYone_SCORE":

            return {...state,score:state.score-1}
    case "six_playerone":
            return{...state,score:state.score+payload}
    case "four_playerone":
            return{...state,score:state.score+payload}
    
    default:
        return state;

}
}

export default PlayeroneReducer;
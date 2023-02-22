const initialState={
    name:"Loe",
    score:90
}

const PlayertwoReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case "INC_PLYtwo_SCORE":
            return {...state,score:state.score+1}
    
    case "DEC_PLYtwo_SCORE":
            return {...state,score:state.score-1}
    case "six_playertwo":
                return{...state,score:state.score+payload}
    case "four_playertwo":
                return{...state,score:state.score+payload}
    
    default:
        return state;

}
}

export default PlayertwoReducer;


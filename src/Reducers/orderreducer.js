const initialState=[];

const orderReducer=(state=initialState,action)=>{
      const {type,payload}=action;
      switch(type){
        case "ADDORDER":
            return [...state,payload]
        default:
            return state
      }
    
}

export default orderReducer;
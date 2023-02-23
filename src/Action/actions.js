


export const additem=(value)=>async dispatch=>{
    dispatch({
        type:"ADD",
        payload:value
    })
}


 export const removeitem=(value)=>async dispatch=>{
    dispatch({
        type:"REMOVE",
        payload:{name:value}
    })
}
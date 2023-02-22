

export const increase_playerone_Score=()=>async dispatch=>{
    dispatch(
            {type:"INC_PLYone_SCORE"})
}

export const decrese_playerone_Score=()=>async dispatch=>{
    dispatch(
            {type:"DEC_PLYone_SCORE"})
}


export const increase_playertwo_Score=()=>async dispatch=>{
    dispatch(
            {type:"INC_PLYtwo_SCORE"})
}

export const decrese_playertwo_Score=()=>async dispatch=>{
    dispatch(
            {type:"DEC_PLYtwo_SCORE"})
}


export const six_playerone=()=>async dispatch=>{
    dispatch(
            {type:"six_playerone",payload:6})
}

export const six_playertwo=()=>async dispatch=>{
    dispatch(
            {type:"six_playertwo",payload:6})
}

export const four_playerone=()=>async dispatch=>{
    dispatch(
            {type:"four_playerone",payload:4})
}


export const four_playertwo=()=>async dispatch=>{
    dispatch(
            {type:"four_playertwo",payload:4})
}
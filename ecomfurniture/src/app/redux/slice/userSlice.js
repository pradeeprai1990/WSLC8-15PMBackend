const { createSlice } = require("@reduxjs/toolkit");
import Cookies from "js-cookie"
export let userSlice=createSlice(
    {
        name:"user",
        initialState:{
            user: Cookies.get('USER') ?  JSON.parse(Cookies.get('USER')) : null
        },
        reducers:{
            getUser:function( state,reqData ){
                let {payload}=reqData
               state.user=payload
               Cookies.set("USER", JSON.stringify( state.user) )
            },
            logoOut:function(state){
                 state.user=null
                 Cookies.remove("USER")
            }
        }
    }
)

export default userSlice.reducer

export const { getUser,logoOut }=userSlice.actions
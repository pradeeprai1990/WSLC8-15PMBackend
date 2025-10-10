const { createSlice } = require("@reduxjs/toolkit");


export let cartSlice=createSlice(
    {
        name:"cart",
        initialState:{
            cart:[]
        },
        reducers:{
            addCart:(state,reqData)=>{
               
                let {payload}=reqData
                 console.log(payload);
                state.cart.push(payload)
            },
            deleteCart:(state,reqData)=>{
                let {payload}=reqData //{ id:1 }
                let id=payload.id
                state.cart=state.cart.filter((obj)=>obj.id!=id)
            }
        }
    }
)

export default cartSlice.reducer
export let  {addCart,deleteCart}=cartSlice.actions
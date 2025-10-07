import { configureStore } from '@reduxjs/toolkit'

import  cartSlice  from "../slice/counterSlice";
import  cartReducer  from "../slice/cartSlice";



export let store=configureStore(
   {
    reducer:{
        myCounter:cartSlice,
        myCart:cartReducer
    }
   }
)
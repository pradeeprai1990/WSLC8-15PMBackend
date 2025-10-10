import { configureStore } from '@reduxjs/toolkit'

import  cartSlice  from "../slice/counterSlice";
import  cartReducer  from "../slice/cartSlice";
import  userReducer from '../slice/userSlice';



export let store=configureStore(
   {
    reducer:{
        myCounter:cartSlice,
        myCart:cartReducer,
        user:userReducer,
    }
   }
)
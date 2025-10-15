const { createSlice } = require("@reduxjs/toolkit");
import Cookies from "js-cookie"
export let userSlice = createSlice(
    {
        name: "user",
        initialState: {
            user: Cookies.get('USER') ? JSON.parse(Cookies.get('USER')) : null,
            token: Cookies.get('TOKEN') ?? ''
        },
        reducers: {
            getUser: function (state, reqData) {
                let { payload } = reqData //Object payload={ user:,toke }
                state.user = payload.user
                state.token = payload.token
                Cookies.set("USER", JSON.stringify(state.user))
                Cookies.set("TOKEN", state.token)
            },
            logoOut: function (state) {
                state.user = null
                state.token = ''
                Cookies.remove("USER")
                Cookies.remove("TOKEN")
            }
        }
    }
)

export default userSlice.reducer

export const { getUser, logoOut } = userSlice.actions
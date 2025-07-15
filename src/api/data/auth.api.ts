import { api } from "../base";


type registerInput={
    username:string
    email:string
    password:string
}
export const authApi= api.injectEndpoints({
    endpoints:({query,mutation})=>({
    register:mutation<void,registerInput>({
        query:(body)=>({
            url:"/auth/register",
            method:"POST",
            body
        }),
        invalidatesTags:["user"]
    })

    })

})

export const {useRegisterMutation} =authApi
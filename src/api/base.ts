
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { RootState } from '../api/data/index.ts';
export const tagTypes =["user"] as const 

// is used to access the environtment variable 
const envUrl =import.meta.env.VITE_API_URl
const defaultUrl = "http://localhost:3000";
 const baseUrl =(envUrl || defaultUrl).replace(
  /\blocalhost\b/,
  window.location.hostname
 )
 

export const api =createApi({
    reducerPath:"api",
    tagTypes,
    endpoints:()=>({}),
    baseQuery:fetchBaseQuery({
       baseUrl,
    //    add bearer token 
        prepareHeaders:(headers,{getState})=>{
            const state = getState() as RootState
            const token =state.auth.token
            if(token){
                headers.set("Authorization",`Bearer ${token}`)
            }
        }
    })

})
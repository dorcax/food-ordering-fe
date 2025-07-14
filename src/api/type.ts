
export type AuthState ={
    token:string
    isVerified?:boolean
    role?:Role
}


 export enum Role{
    USER ="USER",
    ADMIN ="ADMIN"
 }




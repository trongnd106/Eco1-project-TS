export interface SignUp{
    name:string;
    email:string
    role:string
    password:string
    cpassword:string
}
export interface SignIn{
    email:string
    password:string
}

export interface ErrorSignUp{
    name?:string;
    email?:string
    password?:string
    cpassword?:string
}
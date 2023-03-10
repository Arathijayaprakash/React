import { redirect } from "react-router-dom";

export const getAdminAuth=()=>{
    const adminAuth=localStorage.getItem('adminLogged');
    return adminAuth
}
export const getUserAuth=()=>{
    const userAuth=localStorage.getItem('userLogged');
    return userAuth
}
export function checkAdminAuthLoader(){
    const adminAuth=getAdminAuth();
    if(!adminAuth){
        return redirect('/login')
    }
    return null
}
export function checkUserAuthLoader(){
    const userAuth=getUserAuth();
    if(!userAuth){
        return redirect('/login')
    }
    return null
}
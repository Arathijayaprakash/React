import { redirect } from "react-router-dom";

export const getAdminAuth=()=>{
    const adminAuth=localStorage.getItem('adminLogged');
    return adminAuth
}
export function checkAdminAuthLoader(){
    const adminAuth=getAdminAuth();
    if(!adminAuth){
        return redirect('/login')
    }
    return null
}
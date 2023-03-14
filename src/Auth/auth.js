import { Outlet, redirect } from "react-router-dom";

export const getAdminAuth = () => {
  const adminAuth = localStorage.getItem("adminLogged");
  return adminAuth;
};
export const getUserAuth = () => {
  const userAuth = localStorage.getItem("userLogged");
  return userAuth;
};
export const CheckAdminAuthLoader = () => {
  const adminAuth = getAdminAuth();
  return adminAuth ? <Outlet /> : redirect("/login");
};
export function CheckUserAuthLoader() {
  const userAuth = getUserAuth();
  return userAuth ? <Outlet /> : redirect("/login");
}

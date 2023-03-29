import { useAuth } from "../hooks/auth/useAuth";
import { HasRole } from "../roles/HasRole";
import { Navbar } from "./components/navbar/Navbar";
import { ADMIN, CREADOR } from "../roles/roles";
import { SigninService } from "../modules/auth/services/signin.service";

export const DashboardRouter = () =>{
   const { auth } = useAuth() 

   const user = SigninService.getUser();

   
   console.log("dash")
  return (
     <div>   
         <p>User Name: {user.name}</p>
         <p>User Email: {user.email}</p>
         <p>User Rol: {user.rol}</p>
     </div>
  );
}
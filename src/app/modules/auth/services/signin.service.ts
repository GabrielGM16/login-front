//import { HttpService } from "../../../services/http.service";
import axios from "axios";
import { User } from "../interfaces/user.interface";


export class SigninService {
   private static userData: any = {};
 
   public static async signIn(user:User){
      const response = await axios.post(
         'http://localhost:4000/api/usuarios/login',
         user
      )
      this.userData = response.data;
      return response;
   } 


   public static getUser() {
      return this.userData
   }

}
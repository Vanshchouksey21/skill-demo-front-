import React , {createContext, useContext, useEffect, useState}from 'react'
import axios from "axios";

 export const AuthContext = createContext();
 export const Authprovider = ({children}) =>{
    const [token , setToken] = useState(localStorage.getItem("token"));
    const [user , setUser] = useState("")
    const  StoreToken = (Token) =>{
         setToken(Token);
        return localStorage.setItem("token" , Token );


    }
    let isLogin = !!token;

    const LogoutUser = () =>{
        setToken("");
        localStorage.removeItem("token");

    }



    // current user data 
    const userAuthentication = async() =>{
        try {
            let api = "http://localhost:1056/user"
            const res =await axios.get(api , {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

            if(res.status === 200){
               
                setUser(res.data.user);  
            }
        } catch (error) {
            console.error("Error from userAuthentication"  , error);
            
        }

    }
    useEffect(() => {
      
        userAuthentication();
    
      
    }, [])
    
    return <AuthContext.Provider value={{StoreToken , LogoutUser , isLogin , token , user }}>

        {children}
    </AuthContext.Provider>

}

export const useAuth = () =>{
    return useContext(AuthContext)
}

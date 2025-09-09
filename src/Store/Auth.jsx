import React , {createContext, useContext, useState}from 'react'

 export const AuthContext = createContext();
 export const Authprovider = ({children}) =>{
    const [token , setToken] = useState(localStorage.getItem("token"));
    const  StoreToken = (Token) =>{
         setToken(Token);
        return localStorage.setItem("token" , Token );


    }
    let isLogin = !!token;

    const LogoutUser = () =>{
        setToken("");
        localStorage.removeItem("token");

    }
    return <AuthContext.Provider value={{StoreToken , LogoutUser , isLogin , token}}>

        {children}
    </AuthContext.Provider>

}

export const useAuth = () =>{
    return useContext(AuthContext)
}

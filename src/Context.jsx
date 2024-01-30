import { useState, createContext } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({children})=>{
    const [value, setValue] = useState('This is my context')
    
    return (
      <MyContext.Provider value={{ value, setValue }}>
        {children}
      </MyContext.Provider>
    );
}




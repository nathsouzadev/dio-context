import { createContext, useState } from 'react'

const initialState = { 
    login: false
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, setState] = useState(initialState)

    return(
        <GlobalContext.Provider value={{ state, setState }}>
            { children }
        </GlobalContext.Provider>
    )
}

import {createContext,Reducer,useReducer} from 'react'
// import Reducer from './Reducer';


const INITIAL_STATE = {
    user:null,
    isFetching:false,
    error:false
};
export const context = createContext(INITIAL_STATE)

export const ContextProvider = ({children}) =>{
    const [state , dispatch] = useReducer(Reducer,INITIAL_STATE)

    return <context.Provider value={{
        user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch
    }}>
        {children}

    </context.Provider>

}
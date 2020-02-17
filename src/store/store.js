import React, { createContext, useContext, useReducer} from 'react';




const StoreContext = createContext();
const initialstate = {
    showlogin: false,
    showsignup: true,
    loginsuccess: false
};

const reducer = (state, action) => {
    
    
    switch (action.type) {
        case 'showlogin':
            return {
                showlogin: !action.action
            }
        case 'showsignup':
            return {
                showsignup: !action.action
            }
        case 'loginsuccess':
            console.log(state);
            console.log(action);
            
            return {
                loginsuccess: action.action
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialstate);


    return(
        <StoreContext.Provider value={{state, dispatch}}>
        { children }
        </StoreContext.Provider>
    )
}

const useStore = () => useContext(StoreContext);

export default useStore;
import React, { createContext, useContext, useReducer} from 'react';
import { faQrcode, faCalendarWeek, faSlidersH, faEnvelope, faBars, faTimes, faUsers, faRunning } from "@fortawesome/free-solid-svg-icons";




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
            return {
                loginsuccess: action.action
            }
        case 'sess':
            return {
                sess: action.action,
                dd: action.payload,
                menu: [
                    {
                        rid:0, 
                        nam:'Dashboard',
                        path:'/app/dashboard',
                        icon: faQrcode
                    },
                    {
                        rid:1, 
                        nam:'Members',
                        path:'/app/new',
                        icon: faUsers,
                        submenu:[
                            {rid:0,nam:'+ New',typ:'updatedom', pay:'pay',act:'new',col:'primary'},
                            {rid:1,nam:'List',typ:'updatedom', pay:'pay',act:'list',col:'danger'}
                        ]
                    }
                ]
            }
        case 'newuser':
            return {
                ...state,
                newuser: action.action,
                newuserdd: action.payload
            }
        case 'updatedom':
            return {
                ...state,
                updatedom: action.action,
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
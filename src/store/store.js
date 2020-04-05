import React, { createContext, useContext, useReducer} from 'react';
import { faQrcode,faUsers, faUserPlus, faLock /*faCalendarWeek, faSlidersH, faEnvelope, faBars, faTimes, faRunning*/ } from "@fortawesome/free-solid-svg-icons";




const StoreContext = createContext();
const initialstate = {
    showlogin: true,
    showsignup: false,
    loginsuccess: false
};

const reducer = (state, action) => {
    // console.log(state);
    // console.log(action);
    
    
    
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
                        nam:'Orders/Items',
                        path:'/app/new',
                        icon: faUsers,
                        submenu:[
                            {rid:0,nam:'New Item',typ:'updatedom', pay:'pay',act:'new',col:'primary',ico: faUserPlus},
                            {rid:1,nam:'Items',typ:'updatedom', pay:'pay',act:'list',col:'danger', ico: faUsers},
                            {rid:2,nam:'Orders',typ:'updatedom', pay:'pay',act:'orders',col:'danger', ico: faUsers},
                            {rid:3,nam:'Category',typ:'updatedom', pay:'pay',act:'category',col:'danger', ico: faUsers},
                            // {rid:2,nam:'Bill Members',typ:'updatedom', pay:'pay',act:'bill',col:'', ico: faMoneyBillWaveAlt}

                        ]
                    },
                    {
                        rid:2, 
                        nam:'Logout',
                        path:'logout',
                        icon: faLock,
                        submenu:[
                            
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
                data: action.payload
            }
        case 'openmodal':
            return {
                ...state,
                openmodal: action.payload
            }
        case 'payment':
            return {
                ...state,
                openmodal: action.payload.success ? false : true,
                reload : action.payload.success ? false : true,
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
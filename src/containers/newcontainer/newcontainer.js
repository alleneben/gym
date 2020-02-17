import React from 'react';

import { NewForm } from '../../forms'
// import { api } from '../../store';


const NewContainer = () => {

    // const submit = (dd) => {
    //     let fm = new FormData()
    //     fm.append('s','cb');
    //     fm.append('a','combo')
    //     fm.append('df','sp_country_combo')
    //     fm.append('m','l')

    //     return api.fxns.combo(fm,api.fxns.endpoint);
    // }

    return (
        <>
           <NewForm /> 
        </>
    )
}

export default NewContainer;
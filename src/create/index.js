import React from 'react';


import { Field } from '../components';




const buildfield = ({...ownprops}) => {
    console.log({...ownprops});
    
    return <Field {...ownprops}/>
}


export default {
    create :  (...ownprops) => buildfield(ownprops)
}

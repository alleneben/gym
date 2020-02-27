import React from 'react';

import { NewForm } from '../../forms';
import { DataTable, SCard } from '../../components';

import { useStore } from '../../store';

const NewContainer = () => {
    const { state } = useStore()
  
    
    const tbcfg = {
        header:['S/No','Firstname','Surname','Phone','Address','Email','Status','Actions'],
        flds:[{n:'fnm',f:'t'},{n:'snm',f:'t'},{n:'tel',f:'t'},{n:'had',f:'t'},{n:'eml',f:'t'}],
        dbcfg:{s:'controller',a:'find',m:'l',d:'members_fn', load:true,props:{'rid':'n','nam':'t'}},
        params: {rid:'',nam:''},
        actions:['Details']
    }
    

    return (
        <>
            { state.updatedom === 'list' ? <SCard><DataTable  tbcfg={tbcfg} /></SCard> : <NewForm /> }
        </>
    )
}

export default NewContainer;
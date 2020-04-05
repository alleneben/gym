import React, { useState } from 'react';

import { api } from '../../store';




const Field = ({ label,id,type,placeholder,fieldtype,onchange,value,required,styles,cstyles,cb,disabled}) => {
    
    const [combo, setcombo] = useState([])

    const onmousedown = (e) => {
        if(typeof cb === 'object') {
            let c = cb.map((rd,key) => <option key={key} value={rd.rid}>{rd.nam}</option>)
            setcombo(c)
        } else {

            let fm = new FormData()
            fm.append('s','cb');
            fm.append('a','combo')
            fm.append('df',cb)
            fm.append('m','l')
            api.fxns.combo(fm,api.fxns.endpoint)
            .then(rd => {
                let c = rd.sd.map((rd,key) => <option key={key} value={rd.rid}>{rd.nam}</option>)
                setcombo(c)
            })
        }
    }

    return(
        <div className={styles.formitem}>
            <label>{ label }</label>
            {
                fieldtype === 'tt' ?
                    <input id={id} name={id} type={ type } placeholder={ placeholder } onChange={onchange} value={value} required={required}  style={cstyles} disabled={disabled}/> 
                    : fieldtype === 'ta' ?
                    <textarea id={id} name={id} type={ type } placeholder={ placeholder } onChange={onchange} value={value} required={required} style={cstyles}/>
                    :
                    <>
                    <select placeholder={ placeholder } name={id} required={required} onMouseDown={(e)=>onmousedown(e)} onChange={onchange}>
                        <option value="">Choose</option>
                        {
                            combo
                        }
                    </select>
                    <div className="combo">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                    </div>
                    </>

            }
        </div>
    )
}


export default Field;
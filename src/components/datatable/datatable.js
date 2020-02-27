import React,{ useEffect, useState } from 'react';

import styles from '../../asset/scss/util.module.scss';
import './datatable.css';

import { api } from '../../store';


const DataTable  = ({ tbcfg }) => {
    const [data, setdata] = useState([])

    useEffect(() => {
        let tbl = document.getElementById('tbl')


        tbl.classList.add('loading');
        
        const params  = api.utils.formatpostsearch(tbcfg);
        api.fxns.submit(params,api.fxns.endpoint)
        .then(rd => {
            tbl.classList.remove('loading');
            if(rd.success){
                setdata(rd.sd)                
            } else {
                console.log(rd);
            }
        },err => {
            tbl.classList.remove('loading');
            console.log(err)
        })
        
    },[])

    return (
        <table className={styles.datatable} id="tbl" >
            <thead>
                <tr>
                    {
                        tbcfg.header.map((d,k) => {
                            return (
                            <th key={k} className={styles.th}>
                            { d }
                            </th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
              { data.length > 0 ? <tr></tr> : <tr style={{height: 70}}><td></td><td></td><td></td></tr> }
              { 
                data.map((item,key) => {
                    
                    
                  return (
                    <tr key={key}>
                        <td>{key+1}</td>
                        {
                            tbcfg.flds.map((dd,kk) => {
                                var val = dd.f === 'd' ? parseFloat(item[dd.n]).toFixed(2) : item[dd.n];
                                return (
                                    <td key={kk}>{val}</td>
                                )
                            })
                        }
                        <td id={styles.status}><span>Enabled</span></td>
                        <td id={styles.action}>
                            { tbcfg.actions.map((a,ak) => <span key={ak}>{a}</span>)}
                            
                        </td>
                    </tr>
                  );
                })
              }                        
            </tbody>
        </table>
    )
}

export default DataTable;
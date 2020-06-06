import React,{ useEffect, useState } from 'react';

// import styles from '../../asset/scss/util.module.scss';
import styles from './datatable.module.scss';

import { api, useStore } from '../../store';


let col=0;
const DataTable  = ({ tbcfg, reclen }) => {
    const [data, setdata] = useState([])
    const { dispatch } = useStore();    
    
    useEffect(() => {
        let tbl = document.getElementById('loader')
        tbl.classList.add('spinner');
        
        const params  = api.utils.formatpostsearch(tbcfg);
        api.fxns.submit(params,api.fxns.endpoint)
        .then(rd => {
            tbl.classList.remove('spinner');
            if(rd.success){ 
                setdata(rd.sd)
                // dispatch({type:'',payload:'',type:''})                
            } else {
                console.log(rd);
            }
        },err => {
            tbl.classList.remove('spinner');
            console.log(err)
        })  
    },[tbcfg.name,reclen])


    const trigger = (action,rec) => { 
        dispatch({type:'updatedom', payload:rec, action:action.fn, cfg: tbcfg});
    }
    const image = (name) => {
        let img = !!name ? api.fxns.endpoint+'/img/'+name : api.fxns.endpoint+'/img/vt.jpeg';
        return <div className={styles.imgcontainer}>
            <div className={styles.imgwrapper}>
                <img src={img} alt="sample.png" className={styles.img}/>
            </div>
        </div>
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.tablewrapper}>
                    <table className={styles.table}>
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
                        <tbody className={styles.tbody}>
                            { data.length > 0 ? <tr><div id="loader"><div></div><div></div></div></tr> : <tr style={{height: 70}}><td></td><td></td><td></td></tr> }
                            <tr><div id="loader"><div></div><div></div></div></tr>
                            {
                                data.map((item,key) => {
                    
                                    return (
                                      <tr key={key} className={styles.tr}>
                                          <td data-column={tbcfg.header[0]} className={styles.td}>{key+1}</td>
                                          {
                                              tbcfg.flds.map((dd,kk) => {
                                                  var val = dd.f === 'd' ? parseFloat(item[dd.n]).toFixed(2) : dd.f === 'i' ? image(item[dd.n]) : item[dd.n];

                                                  col = kk + 1
                                                  return (
                                                      <td key={kk} data-column={tbcfg.header[kk+1]} className={styles.td}>
                                                          <div className={styles.tdmain}>{val}</div>
                                                          {/* <div className={styles.tdsub}>{val}</div> */}
                                                      </td>
                                                  )
                                              })
                                          }
                                          <td className={styles.td} data-column={tbcfg.header[col+1]}>
                                              { tbcfg.status.map((s,sk)=> <span key={sk} className={styles.active}>{s}</span>) }
                                          </td>
                                          <td className={styles.td} data-column={tbcfg.header[col+2]}>
                                              { tbcfg.actions.map((action,actionkey) => <span key={actionkey} className={styles.action} onClick={() => trigger(action,item)}>{action.fn}</span>)}
                                          </td>
                                      </tr>
                                    );
                                  })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    )
}

export default DataTable;
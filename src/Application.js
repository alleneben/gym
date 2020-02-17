import React, { useEffect } from 'react';

import CoreRoutes from './routes/core-routes';
import { StoreProvider } from './store/store';
import { api } from './store'

function Application() {

  useEffect(()=>{
    let fm = new FormData()
    fm.append('c',api.utils.getcookie('PHPSESSID'))
    fm.append('s','session')
    fm.append('a','sessioncreate')

    api.fxns.submit(fm,api.fxns.endpoint)
    .then(rd=> {
      // console.log(rd);
      
    }, err => console.log(err))

    return () => {
      console.log('Cleaning up application ...');
    };
    
  },[])
  
  return (
    <StoreProvider>
      <CoreRoutes />
    </StoreProvider>
  
  );
}

export default Application;

import React, { useEffect } from 'react';

import CoreRoutes from './routes/core-routes';
import { StoreProvider } from './store/store';

function Application(props) {

  useEffect(()=>{
    

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

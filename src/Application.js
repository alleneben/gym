import React from 'react';

import CoreRoutes from './routes/core-routes';
import { StoreProvider } from './store/store';


function Application() {

  
  return (
    <StoreProvider>
      <CoreRoutes />
    </StoreProvider>
  
  );
}

export default Application;

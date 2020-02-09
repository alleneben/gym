import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { Start, MainContainer } from '../containers';


const CoreRoutes = () => {
  return (
    <Switch>
      {/* All the routes and their component to render goes here as shown below */}
      <Route exact path="/" component={Start} />
      <Route exact path="/app/dashboard" component={MainContainer} />
      <Route exact path="/app/new" component={MainContainer} />
      <Route
        path=""
        render={props => {
          return <h5>Page Not Found. It is under fast development</h5>;
            /* component goes here. { ...props can be passed to the component to get access 
              to the history, location and match as props }*/
              
        }}
      />
    </Switch>
  );
};

// withRouter will give us access to history, location
// and match as props to the component rendered according
// to the Route path so that it can redirect the user
// with for example this.props.history.push
export default withRouter(CoreRoutes);

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute  = ({component: Component, user, ...rest}) => {
  console.log({component: Component, user, ...rest})
    return (
      <Route
        render={ props  => {
            if(user){
              return <Component {...props} loggedInUser={user} {...rest} />
            } else {
              return <Redirect to={{pathname: '/', state: {from: props.location}}} />
            }
          }
        }
      />
    )
}

export default ProtectedRoute;
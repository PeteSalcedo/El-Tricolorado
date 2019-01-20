import React from 'react';
import Layout from './Hoc/Layout';

import { Switch, Route }  from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';


const Routes = (props) => {
    return(
    <Layout/>
        )

}

export default Routes;
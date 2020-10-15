import React from 'react';
import {
    Switch,
    Route,
    Router
  } from "react-router-dom";
import UserOrder from './UserOrders/UserOrder';
import UserOrdersReview from './UserOrdersReview/UserOrdersReview';
import UsersOrderedServices from './UsersOrderedServices/UsersOrderedServices';

const UserPanelInfo = () => {
    return (
            <Switch>
                <Route path="/userPanel/:serviceId/orders">
                    <UserOrder></UserOrder>
                </Route>
                <Route path="/userPanel/orderedServices">
                    <UsersOrderedServices></UsersOrderedServices>
                </Route>
                <Route path="/userPanel/ordersReview">
                    <UserOrdersReview></UserOrdersReview>
                </Route>
            </Switch> 
            
    );
};

export default UserPanelInfo;
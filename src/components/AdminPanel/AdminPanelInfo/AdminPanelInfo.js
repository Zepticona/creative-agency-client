import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import AddService from './AddService/AddService';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ServiceList from './ServiceList/ServiceList';

const AdminPanelInfo = () => {
    return (
        <Switch>
            <Route path="/adminPanel/serviceList">
                <ServiceList></ServiceList>
            </Route>
            <Route path="/adminPanel/addService">
                <AddService></AddService>
            </Route>
            <Route path="/adminPanel/makeAdmin">
                <MakeAdmin></MakeAdmin>
            </Route>
        </Switch>
    );
};

export default AdminPanelInfo;
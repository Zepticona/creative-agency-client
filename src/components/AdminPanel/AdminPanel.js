import React from 'react';
import { Container } from 'react-bootstrap';
import classes from '../UserPanel/userPanel.module.css'
import AdminPanelInfo from './AdminPanelInfo/AdminPanelInfo';
import AdminPanelNav from './AdminPanelNav/AdminPanelNav';
const AdminPanel = () => {
    return (
        <Container>
            <div className={classes.wrappingContainer}>
                <div className={classes.userNavigationPanel}>
                    <AdminPanelNav></AdminPanelNav>
                </div>
                <div className={classes.userInfoPanel}>
                    <AdminPanelInfo></AdminPanelInfo>
                </div>
            </div>
        </Container>
    );
};

export default AdminPanel;
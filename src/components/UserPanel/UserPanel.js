import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import classes from './userPanel.module.css'
import UserPanelInfo from './UserPanelInfo/UserPanelInfo';
import UserPanelNav from './UserPanelNav/UserPanelNav';
const UserPanel = () => {
    const serviceIdObject = useParams()
    console.log(serviceIdObject)
    return (
        <Container> 
            <div className={classes.wrappingContainer}>
                <div className={classes.userNavigationPanel}>
                    <UserPanelNav></UserPanelNav>
                </div>
                <div className={classes.userInfoPanel}>
                    <UserPanelInfo></UserPanelInfo>
                </div>
            </div>
        </Container>
    );
};

export default UserPanel;
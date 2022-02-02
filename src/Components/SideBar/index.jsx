import React from 'react';
import CommonDrawer from 'das-ui/dist/Drawer/CommonDrawer';
import './Sidebar.css';
import avatarPNG from '../../assets/avatar.png';

const SideBar = () => {
    return (
        <CommonDrawer imageSrc={avatarPNG} />
    );
};

export default SideBar;

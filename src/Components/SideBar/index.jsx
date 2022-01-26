import React from 'react';
import CommonDrawer from 'das-ui/dist/Drawer/CommonDrawer';
import './Sidebar.css';
import { bool, func, string } from 'prop-types';
import avatarPNG from '../../assets/avatar.png';
import useGetUserInfo from '../../hooks/useGetUserInfo';

const SideBar = (props) => {
    const {
        activeKey,
        expanded,
        onChange,
        setActiveKey,
    } = props;

    const [, userInfo] = useGetUserInfo();

    const {
        name,
        type,
    } = userInfo;

    return (
        <CommonDrawer
            name={name}
            type={type}
            expanded={expanded}
            style={{ display: 'flex', flexDirection: 'row' }}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            onChange={onChange}
            imageSrc={avatarPNG}
        />
    );
};

SideBar.defaultProps = {
    expanded: false,
};

SideBar.propTypes = {
    activeKey: string.isRequired,
    expanded: bool,
    onChange: func.isRequired,
    setActiveKey: func.isRequired,
};

export default SideBar;

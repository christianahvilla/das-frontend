import React, { useState } from 'react';
import { Container, Content } from 'rsuite';
import useNavigate from '../../hooks/useNavigate';
import Body from '../../router/Body';
import SideBar from '../SideBar';
import './Layout.css';

const Layout = () => {
    const [, navigateTo, sideBarRoute] = useNavigate();
    const setActiveKey = (path) => {
        navigateTo(`/${path}`);
    };
    const [expanded, setExpanded] = useState(false);
    const onChange = () => setExpanded(!expanded);

    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <SideBar expanded={expanded} onChange={onChange} activeKey={sideBarRoute} setActiveKey={setActiveKey} />
                <Container className="container">
                    <Content>
                        <Body />
                    </Content>
                </Container>
            </Container>
        </div>
    );
};

export default Layout;

import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Container, Content } from 'rsuite';
import Body from '../../router/Body';
import SideBar from '../SideBar';
import './Layout.css';

const Layout = () => {
    const match = useRouteMatch();

    return (
        <Container className="container body--container">
            <SideBar />
            <Container className="container">
                <Content>
                    <Body path={match.path} />
                </Content>
            </Container>
        </Container>
    );
};

export default Layout;

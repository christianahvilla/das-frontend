import React, { useContext, useState } from 'react';
import { Container, Content } from 'rsuite';
import useNavigate from '../../hooks/useNavigate';
import Body from '../../router/Body';
import { AppContext } from '../../utils/AppContext';
import SideBar from '../SideBar';
import Progress from '../Progress';
import './Layout.css';

const Layout = () => {
    const [prevRoute, , navigateTo] = useNavigate();
    const setActiveKey = (path) => {
        navigateTo(`/${path}`);
    };
    const [expanded, setExpanded] = useState(false);
    const onChange = () => setExpanded(!expanded);
    const [context] = useContext(AppContext);
    const {
        loading,
    } = context;

    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <SideBar expanded={expanded} onChange={onChange} activeKey={prevRoute} setActiveKey={setActiveKey} />
                <Container className="container">
                    <Content>
                        {loading ? <Progress /> : <Body />}
                    </Content>
                </Container>
            </Container>
        </div>
    );
};

export default Layout;

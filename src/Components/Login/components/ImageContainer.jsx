import React from 'react';
import { FlexboxGrid, Panel } from 'rsuite';
import { LOGIN_TITLE } from '../utils/constants';
import login_image from '../assets/login_image.png';
import './ImageContainer.css';

const ImageContainer = () => {
    return (
        <FlexboxGrid className="container" align="middle" justify="center">
            <FlexboxGrid.Item>
                <Panel shaded>
                    <FlexboxGrid className="image-container" align="middle" justify="center">
                        <FlexboxGrid.Item className="image-container--title">
                            <h6>{LOGIN_TITLE}</h6>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item>
                            <img className="image-login" src={login_image} alt="login_image" />
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
};

export default ImageContainer;

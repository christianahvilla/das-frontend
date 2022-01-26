import { useSelector } from 'react-redux';

export default () => {
    const auth = useSelector((state) => state?.auth?.authenticated);

    const {
        name,
        email,
        type,
        token,
    } = auth || {};

    const userInfo = {
        name,
        type: type || 'Admin',
        email,
    };

    const isAuthenticated = typeof token === 'string';

    return [isAuthenticated, userInfo, token];
};
import { useContext } from 'react';
import { AppContext } from '../../utils/AppContext';

export default () => {
    const [, setContext] = useContext(AppContext);
    const setLoader = (loading) => {
        if (typeof loading !== 'boolean') {
            return;
        }

        setContext((currentContext) => setContext(
            {
                ...currentContext,
                loading,
            },
        ));
    };
    return [setLoader];
};

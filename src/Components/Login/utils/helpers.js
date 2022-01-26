/* eslint-disable import/prefer-default-export */
export const fakeAuth = (onBegin, onSuccess, onError) => {
    try {
        onBegin();
        // throw new Error('Ocurrió un error en el servidor');
        // eslint-disable-next-line no-unreachable
        setTimeout(() => onSuccess({ data: { email: 'christianahvilla@gmail.com', token: 'token', name: 'Christian Herrejon' } }), 5000);
    } catch (error) {
        onError(error);
    }
};

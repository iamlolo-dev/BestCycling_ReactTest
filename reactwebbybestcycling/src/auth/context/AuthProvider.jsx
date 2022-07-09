import React, { useReducer } from 'react'
import { saveSubscription } from '../../BestCycling/api/Api';

import { types } from '../types/types';
import { AuthContext, authReducer } from './'

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {
        logged: JSON.parse(localStorage.getItem('user')) ? true : false,
        user: JSON.parse(localStorage.getItem('user'))
    });

    const login = (user) => {
        const action = { type: types.login, payload: user };

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    };

    const logout = () => {

        saveSubscription(authState.user)
            .then((res) => {
                console.log(res.data)
                localStorage.clear();

                const action = { type: types.logout };

                dispatch(action);

            })
    }

    const updateTime = (time) => {
        const action = { type: types.subscriptionTimer, payload: time };

        dispatch(action);
    }

    const decrementTime = () => {
        const action = { type: types.decrementTimer };

        dispatch(action);
    }

    const toggleAutorenove = () => {
        const action = { type: types.toggleAutorenove };

        dispatch(action);
    }

    const updateTypeSub = (time) => {
        const action = { type: types.typeSubscription, payload: time };

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            authState,

            //Methods
            login,
            logout,
            updateTime,
            decrementTime,
            toggleAutorenove,
            updateTypeSub,
        }} >
            {children}
        </AuthContext.Provider>
    );
};
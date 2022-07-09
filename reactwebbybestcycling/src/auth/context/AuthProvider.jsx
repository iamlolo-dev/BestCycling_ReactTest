import React, { useReducer } from 'react'

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
        localStorage.clear();

        const action = { type: types.logout };

        dispatch(action);
    }

    const updateTime = (time) => {
        const action = { type: types.subtimer, payload: time };

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

    const updateTypeSub = (typeTime) => {
        const action = { type: types.typeSubscription, payload: typeTime };

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
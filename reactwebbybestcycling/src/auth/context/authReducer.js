import { types } from "../types/types";

export const authReducer = (state = {}, action) => {

    switch (action.type) {

        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false,
            };

        case types.subtimer:
            return {
                ...state,
                user: {
                    ...state.user,
                    subscription: action.payload
                }
            };

        case types.decrementTimer:
            return {
                ...state,
                user: {
                    ...state.user,
                    subscription: state.user.subscription !== null && state.user.subscription > 0 ? state.user.subscription - 1000 : null
                }
            };

        case types.toggleAutorenove:
            return {
                ...state,
                user: {
                    ...state.user,
                    autorenove: !state.user.autorenove
                }
            };

        case types.typeSubscription:
            return {
                ...state,
                user: {
                    ...state.user,
                    typeSubscription: action.payload
                }
            };

        default:
            return state;
    };
};
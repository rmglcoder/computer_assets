import { createContext, useReducer } from 'react';

export const AssetsContext = createContext();
export const assetsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ASSETS':
            return {
                assets: action.payload
            };
        case 'CREATE_ASSET':
            return {
                assets: [action.payload, ...state.assets]
            };
        case 'DELETE_ASSET':
            return {
                assets: state.assets.filter((a) => a._id !== action.payload._id)
            };
        case 'UPDATE_ASSET':
            return {
                assets: state.assets.map((a) => {
                    if (a._id === action.payload._id) {
                        return { ...a, ...action.payload.updatedFields };
                    }
                    return a;
                })
            };
        default:
            return state;
    }
};

export const AssetsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(assetsReducer, {
        assets: [] // Initialize assets as an empty array
    });

    return (
        <AssetsContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AssetsContext.Provider>
    );
};

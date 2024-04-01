import { AssetsContext } from '../context/AssetsContext';
import { useContext } from 'react';

export const useAssetContext = () => {
    const context = useContext(AssetsContext);

    if (!context) {
        throw Error('useAssetContext must be used inside an AssetsContextProvider');
    }

    return context;
};

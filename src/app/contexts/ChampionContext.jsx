'use client';
import React from 'react';

export const ChampionContext = React.createContext();

export const ChampionProvider = ({children}) => {
    const [championData, setChampionData] = React.useState(null);
    return <ChampionContext.Provider value={{championData, setChampionData}}>
        {children}
    </ChampionContext.Provider>
}
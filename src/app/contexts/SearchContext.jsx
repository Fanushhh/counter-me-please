'use client';
import React from  'react';

export const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    return <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        {children}
    </SearchContext.Provider>
}
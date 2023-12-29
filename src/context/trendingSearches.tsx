"use client"

import Loader from "@component/loader";
import { params } from "@types";
import getTrendingSearchTerms from "@util/getTrendingSearchTerms";
import { Context, createContext, useEffect, useState } from "react";

export const trendingSearchesContext: Context<{
    trendingSearches: string[]
}> = createContext({
    trendingSearches: new Array<string>()
})

export function TrendingSearchesContextProvider({ children }: params) {
    const [trendingSearches, setTrendingSearches] = useState(Array<string>);

    useEffect(() => {
        getTrendingSearchTerms().then((trendingSearchTerms) => {
            setTrendingSearches(trendingSearchTerms);
        });
    }, []);

    return (
        <trendingSearchesContext.Provider value={{ trendingSearches }}>
            {trendingSearches.length === 0 ? <Loader /> : children}
        </trendingSearchesContext.Provider>
    );
}
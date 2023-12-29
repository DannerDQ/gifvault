"use client"

import { Gif, GifsContext, params } from "@types";
import { Context, createContext, useEffect, useState } from "react";

export const trendingGifsContext: Context<GifsContext> = createContext({})

export default function TrendingGifsContextProvider({children} : params) {
    const [gifs, setGifs] = useState(Array<Gif>);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      if (gifs.length !== 0) {
        localStorage.setItem("gifs", JSON.stringify(gifs));
      }
    }, [gifs]);

    return (
      <trendingGifsContext.Provider
        value={{ gifs, setGifs, offset, setOffset }}>
        {children}
      </trendingGifsContext.Provider>
    );
}
"use client"

import { Gif, GifsContext, params } from "@types";
import { Context, createContext, useEffect, useState } from "react";

export const gifsContext: Context<GifsContext> = createContext({})

export default function GifsContextProvider({children} : params) {
    const [gifs, setGifs] = useState(Array<Gif>);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      if (gifs.length !== 0) {
        localStorage.setItem("gifs", JSON.stringify(gifs));
      }
    }, [gifs]);

    return (
      <gifsContext.Provider value={{ gifs, setGifs, offset, setOffset }}>
        {children}
      </gifsContext.Provider>
    );
}
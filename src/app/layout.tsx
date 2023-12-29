import TrendingGifsContextProvider from "@context/trendingGifs";
import { Metadata } from "next"
import GifsContextProvider from "@context/gifs";
import { params } from "@types";
import Glitch from "@component/glitch";
import SearchBar from "@component/searchBar";
import "./globals.css"
import { TrendingSearchesContextProvider } from "@context/trendingSearches";

export const metadata:Metadata = {
  title: "GifVault",
  description: "Donde la diversión está asegurada 😁",
  icons: "/src/favicon.ico"
}

export default function RootLayout({ children }: params) {
  return (
    <html lang="es">
      <body>
        <header>
          <Glitch/>
          <SearchBar/>
        </header>
        <main>
          <TrendingGifsContextProvider>
            <GifsContextProvider>
              {children}
            </GifsContextProvider>
          </TrendingGifsContextProvider>
        </main>
      </body>
    </html>
  );
}
const KEY = "6vyi06hYDqfrLJOHnaermAeDggVJgsYK";
const API = "https://api.giphy.com";

/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async function () {
        return [
          {
            source: "/search",
            destination: "/",
            permanent: true,
          },
        ];
    },
    env: {
        KEY,
        API,
        TRENDING_SEARCH_TERMS: `${API}/v1/trending/searches?api_key=${KEY}`,
        TRENDING_GIFS: `${API}/v1/gifs/trending?api_key=${KEY}&limit=35&bundle=messaging_non_clips`,
        SEARCH_GIFS: `${API}/v1/gifs/search?api_key=${KEY}&limit=35&bundle=clips_grid_picker`,
        RELATED_GIFS: `${API}/v1/gifs/related?api_key=${KEY}`,
    },
}

module.exports = nextConfig

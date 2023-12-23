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
        // BG_COLORS: [
        //     "rgb(0, 255, 153)", // Green
        //     "rgb(0, 204, 255)", // SkyBlue
        //     "rgb(153, 51, 255)", // Violet
        //     "rgb(255, 102, 102)", // Red
        //     "rgb(255, 243, 92)", // Yellow
        // ]
    },
}

module.exports = nextConfig

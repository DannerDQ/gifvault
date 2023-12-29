import { Dispatch, ReactNode, SetStateAction } from "react"


type baseGif = {
  title: string;
  id: string;
};

type baseInfo = {
  url: string;
  width: number;
  height: number;
  webp?: string;
};

export type bruteGif = baseGif & {
  images: {
    original: baseInfo;
    fixed_width: baseInfo;
  };
};

export type Gif = baseInfo &
  baseGif & {
    srcSet: string;
    original: baseInfo;
  };

export type GifsContext = {
	gifs?: Gif[]
	setGifs?: Dispatch<SetStateAction<Gif[]>>
	offset?: number
	setOffset?: Dispatch<SetStateAction<number>>
}

export type params = {
    children: ReactNode
}
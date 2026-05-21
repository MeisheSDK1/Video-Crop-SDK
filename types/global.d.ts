/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

type DeepReadOnly<T extends Record<string | symbol, any>> = {
  readonly [K in keyof T]: DeepReadOnly<T[K]>;
};

type ValueOf<T> = T extends ArrayLike<any> ? T[number] : T[keyof T];

declare type Point = {
  x: number;
  y: number;
};

declare module 'video.js';
declare module 'mp4box';


declare interface Navigator {
  deviceMemory: number | undefined;
}

class NvsVectorVal<T> {
  push_back(s: any): void;
  size(): number;
  get(a: any): any;
}

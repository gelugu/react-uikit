import { ReactNode } from "react";
export declare const FloatAnimation: (props: FloatAnimationProps) => JSX.Element;
export interface FloatAnimationProps {
    children: ReactNode;
    fromPosition?: Coord2d;
    toPosition?: Coord2d;
}
export interface Coord2d {
    x: number;
    y: number;
}

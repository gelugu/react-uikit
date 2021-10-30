import { ReactNode } from "react";
import { LineType } from "../blocks";
export declare const Header: (props: HeaderProps) => JSX.Element;
export interface HeaderProps {
    children: ReactNode;
    size?: HeaderSize;
    color?: string;
    lineType?: LineType;
}
export declare enum HeaderSize {
    small = 3,
    medium = 2,
    large = 1
}

import { InputHTMLAttributes, ReactNode } from "react";
import { LineType } from "../blocks";
import { HeaderSize } from "../header";
export declare const View: (props: ViewProps) => JSX.Element;
export interface ViewProps extends InputHTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    direction?: "column" | "row";
    positionX?: "start" | "center" | "end";
    positionY?: "start" | "center" | "end";
    border?: boolean;
    borderColor?: string;
    header?: string;
    headerSize?: HeaderSize;
    headerColor?: string;
    headerLineType?: LineType;
}
